import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAdminGuard implements CanActivate{
    constructor (private readonly jwtService:JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req=context.switchToHttp().getRequest()
        const authHeader =req.headers.authorization
        if(!authHeader){
            throw new UnauthorizedException({message:"Headerda token berilmagan"})
        }

        const bearer =authHeader.split(" ")[0]
        const token = authHeader.split(" ")[1];
        if(bearer!="Bearer"||!token){
            throw new UnauthorizedException({
                messages:"Beared token berilmagan"
            })
        }
        let admin:any
        try {
            admin =this.jwtService.verify(token)
        } catch (error) {
            console.log(error);
            throw new UnauthorizedException({
                message:"Token verification failed"
            })
        }
        req.admin=admin  
        return true
    }
}