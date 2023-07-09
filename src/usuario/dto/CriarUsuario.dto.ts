import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class CriarUsuarioDto{

    @IsNotEmpty({ message : "O campo nome não pode ser vazio!"})
    nome: string;

    @IsEmail(undefined, { message: "Email inválido!"})
    email: string;

    @MinLength(6, {message : "Senha deve ter no mínimo 6 caracteres!"})
    senha: string
}