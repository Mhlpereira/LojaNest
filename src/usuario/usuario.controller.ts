import { Body, Controller, Post , Get } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriarUsuarioDto } from './dto/CriarUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

    private usuarioRepository = new UsuarioRepository

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriarUsuarioDto){
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }

    @Get()
    async listarUsuario(){
       return this.usuarioRepository.listar();
    }

};
