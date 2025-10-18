import { IsString, IsEmail, IsNotEmpty, Matches, IsEnum } from "class-validator"

enum Role {
    PARTICIPANT = 'participant',
    ORGANIZER = 'organizer'
}

export class CreateUser {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    readonly password: string;

    @IsEnum(Role)
    readonly role: Role;
}