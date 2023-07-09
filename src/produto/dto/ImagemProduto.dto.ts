import { IsNotEmpty, IsString, IsUrl } from "class-validator";


export class ImagemProdutoDTO{

    @IsUrl()
    url: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
    descricao: string;
}