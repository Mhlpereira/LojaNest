import { Controller , Post , Get, Body } from "@nestjs/common"
import { ProdutoRepository } from "./produto.repository"
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";

@Controller('/produtos')
export class ProdutoController{

    private produtoRepository = new ProdutoRepository

    @Post()
    async cadastraProduto(@Body() dadosDoProduto: CriaProdutoDTO){
        this.produtoRepository.salvar(dadosDoProduto);
        return dadosDoProduto;
    }

    @Get()
    async listarProduto(){
       return this.produtoRepository.listar();
    }


}