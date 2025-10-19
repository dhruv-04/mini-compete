import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUser } from "./usersDTO/createUser.dto";
import { LoginUser } from "./usersDTO/loginUser.dto";
import { JwtService } from "@nestjs/jwt";
import { hash, compare } from "bcrypt";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly prisma: PrismaService) {};

    async signUp(createUser: CreateUser) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: createUser.email }
        });
        if(existingUser) {
            throw new ConflictException("User with this email already exists.");
        }

        //proceed to hash the password if the email is valid
        const hashedPassword = await hash(createUser.password, 10);
        //proceed to push the entire credential into the database
        const user = await this.prisma.user.create({
            data: {
                email: createUser.email,
                name: createUser.name,
                password: hashedPassword,
                role: createUser.role
            },
            select: {
                userId: true,
                email: true,
                name: true,
                role: true
            }
        });

        const payload = { email: user.email, userId: user.userId, role: user.role };
        const token = this.jwtService.sign(payload, { expiresIn: '1h' });
        return { message:"User Creted succesfully!", accessToken: token };
    }

    async login(loginUser: LoginUser) {
        const existingUser = await this.prisma.user.findUnique({ where: { email: loginUser.email }});
        if(!existingUser) {
            throw new UnauthorizedException("Invalid Credentials");
        } 

        const passswordValid = await compare(loginUser.password, existingUser.password);
        if(!passswordValid) {
            throw new UnauthorizedException("Invalid Credentials");
        }

        //proceed with generating the token if nothing happens usig JWT
        const payload = { email: loginUser.email, role: existingUser.role, userId: existingUser.userId };
        const token = this.jwtService.sign(payload, { expiresIn: '1h'});
        // const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
        return { message:"User Authenticated.", accessToken: token };
    }
}