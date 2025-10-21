import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
    ) {}

    canActivate(context: ExecutionContext): boolean  {
        const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());

        if(!requiredRoles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();

        if(!request.user) {
            throw new ForbiddenException(`Unauthorized Access.`)
        }

        const hasRole = requiredRoles.some((role) => request.user.role === role);
        if(hasRole) {
            return true;
        }

        throw new ForbiddenException('Unauthorized Access');

    }
}