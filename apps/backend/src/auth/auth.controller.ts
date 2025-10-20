import { Controller, Post, Get, Body, UseGuards } from "@nestjs/common";
import { CreateUser } from './usersDTO/createUser.dto';
import { LoginUser } from './usersDTO/loginUser.dto';
import { AuthService } from "./auth.service";
import { RolesGuard } from "./roles.guard";
import { Roles } from "./roles.decorator";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    signUpUser(@Body() createUser: CreateUser) {
        return this.authService.signUp(createUser);
    }

    @Post('login')
    loginUser(@Body() loginUser: LoginUser) {
        return this.authService.login(loginUser);
    }
}