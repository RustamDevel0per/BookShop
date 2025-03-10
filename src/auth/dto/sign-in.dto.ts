import { IsEmail, IsEmpty, IsStrongPassword } from "class-validator"

export class SignInDto{
    @IsEmail()
    readonly email:string
    // @IsStrongPassword({minLength:6},{message:"PASSWORD is not strong enough"})
    readonly password:string
    readonly value:string

}