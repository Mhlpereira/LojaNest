import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailEUnico } from "../validacao/email-e-unico.validator";


export class AtualizaUsuarioDTO{

    @IsNotEmpty({ message : "O campo nome não pode ser vazio!"})
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: "Email inválido!"})
    @EmailEUnico({message:'Email existente!'})
    @IsOptional()
    email: string;

    @MinLength(6, {message : "Senha deve ter no mínimo 6 caracteres!"})
    @IsOptional()
    senha: string
}