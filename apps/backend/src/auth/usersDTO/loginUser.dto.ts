import { IsEmail, IsNotEmpty, isString, IsString, Matches } from 'class-validator';

export class LoginUserDTO {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    @IsNotEmpty()
    readonly password: string
}