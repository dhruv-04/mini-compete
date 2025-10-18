import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUser } from "./usersDTO/createUser.dto";
import { LoginUser } from "./usersDTO/loginUser.dto";
import { JwtService } from "@nestjs/jwt";
import { hash, compare } from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {};

    async signUp(createUser: CreateUser) {
        let userConfilct = ""; //look for the existing email in the database
        if(userConfilct === createUser.email) {
            throw new ConflictException("Email already exists.");
        }

        //proceed to hash the password if the email is valid
        let hashedPassword = await hash(createUser.password, 10);
        //proceed to push the entire credential into the database
        return { message:"User Creted succesfully!" };
    }

    async login(loginUser: LoginUser) {
        const emailValid = ""; //function to get email from database
        if(!emailValid) {
            throw new UnauthorizedException("Invalid Credentials");
        } 

        const role = ""; //query the role from the database
        const passswordValid = "";
        if(!passswordValid) {
            throw new UnauthorizedException("Invalid Credentials");
        }

        //proceed with generating the token if nothing happens usig JWT
        const payload = { email: loginUser.email, role: role };
        const token = this.jwtService.sign(payload, { expiresIn: '1h'});
        const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
        return { accessToken: token };
    }
}