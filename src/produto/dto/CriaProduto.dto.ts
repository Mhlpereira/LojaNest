import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsPositive, IsUUID, MaxLength, ValidateNested } from "class-validator";
import { CaracteristicasProdutoDTO } from "./CaracteristicasProduto.dto";
import { ImagemProdutoDTO } from "./ImagemProduto.dto";
import { Type } from "class-transformer";


export class CriaProdutoDTO {

    @IsUUID(undefined, {message:'Id de usuário inexistente'})
    usuarioId : string;

    @IsNotEmpty({message:'O nome do produto não pode ser vazio'})
    nome: string;

    @IsPositive({message: 'O valor precisa ser maior que 0'})
    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    valor: number;

    @IsNumber()
    @IsPositive({message :'Quantidade precisa ser maior que 0'})
    quantidade: number;

    @IsNotEmpty({message: 'Descrição não pode ser vazia'})
    @MaxLength(1000, {message:'Descrição pode ter no máximo 1000 caracteres'})
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicasProdutoDTO)
    caracteristicas: CaracteristicasProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsNotEmpty({message:'Categoria do produto não pode ser vazia!'})
    categoria: string;
}