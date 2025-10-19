import { IsEmail, IsNotEmpty, isString, IsString, Matches } from 'class-validator';

enum Role {
    PARTICIPANT = 'participant',
    ORGANIZER = 'organizer'
}

export class LoginUser {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    @IsNotEmpty()
    readonly password: string
}