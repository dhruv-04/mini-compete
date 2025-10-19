import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean  {
        const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());

        if(!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];

        //check for existance token
        if(!authHeader) {
            throw new UnauthorizedException('No Token provided.');
        }

        const token = authHeader.split(' ')[1];
        if(!token) {
            throw new UnauthorizedException('Invalid token format');
        }

        //verfiy token through jwt
        const user = { email: "johdoe@gmail.com", role: 'organizer'};
        
        request.user = user;

        const hasRole = requiredRoles.some((role) => user.role === role);
        if(hasRole) {
            return true;
        }

        throw new ForbiddenException('Unauthorized Access');

    }
}