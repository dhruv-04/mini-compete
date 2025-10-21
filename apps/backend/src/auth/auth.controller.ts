import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserDTO } from './usersDTO/createUser.dto';
import { LoginUserDTO } from './usersDTO/loginUser.dto';
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    signUpUser(@Body() createUser: CreateUserDTO) {
        return this.authService.signUp(createUser);
    }

    @Post('login')
    loginUser(@Body() loginUser: LoginUserDTO) {
        return this.authService.login(loginUser);
    }
}