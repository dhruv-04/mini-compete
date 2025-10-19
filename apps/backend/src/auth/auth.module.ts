import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from "./jwt.strategy";
import { RolesGuard } from "./roles.guard";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'aksjdfgiaehtuj23453iu',
            signOptions: { expiresIn: '1h'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, RolesGuard],
    exports: [JwtModule, RolesGuard]
})

export class AuthModule {}