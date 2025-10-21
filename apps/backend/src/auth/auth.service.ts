import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDTO } from "./usersDTO/createUser.dto";
import { LoginUserDTO } from "./usersDTO/loginUser.dto";
import { JwtService } from "@nestjs/jwt";
import { hash, compare } from "bcrypt";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly prisma: PrismaService) {};

    async signUp(createUser: CreateUserDTO) {

        //query to check if the user email exists or not
        const existingUser = await this.prisma.user.findUnique({
            where: { email: createUser.email },
            select: { email: true }
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
                role: true,
                email: true,
                name: true,
            }
        });

        //create payload
        const payload = { userId: user.userId, role: user.role, email: user.email, name: user.name };
        //create token
        const token = this.jwtService.sign(payload, { expiresIn: '1h' });

        console.log(`[AuthService] User created [${new Date().toISOString()}]`);
        return { message:"User Created succesfully!", accessToken: token };
    }

    //function to implement user login
    async login(loginUser: LoginUserDTO) {
        //query for user email and password
        const existingUser = await this.prisma.user.findUnique({ 
            where: { email: loginUser.email },
            select: { email: true, password: true, userId: true, role: true, name: true }
        });

        //throw error if user does not exist
        if(!existingUser) {
            console.log(`[AuthLogin] Invalid credentails at [${new Date().toISOString()}]`)
            throw new UnauthorizedException("Invalid Credentials");
        } 

        //check for matching password
        const passswordValid = await compare(loginUser.password, existingUser.password);
        if(!passswordValid) {
            console.log(`[AuthLogin] Invalid credentails at [${new Date().toISOString()}]`)
            throw new UnauthorizedException("Invalid Credentials");
        }

        //proceed with generating the token if nothing happens usig JWT
        const payload = { role: existingUser.role, userId: existingUser.userId, email: existingUser.email, name: existingUser.name };
        const token = this.jwtService.sign(payload, { expiresIn: '1h'});
        // const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
        console.log(`[AuthLogin] Valid credentails at [${new Date().toISOString()}] for user : ${existingUser.userId}`);
        return { message:"User Authenticated.", accessToken: token };
    }
}