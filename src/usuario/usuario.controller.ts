import { Body, Controller, Post , Get, Put, Param, Delete } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriarUsuarioDto } from './dto/CriarUsuario.dto';
import { UsuarioEntity } from './usario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

   private usuarioRepository = new UsuarioRepository;

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriarUsuarioDto){
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = uuid();
        this.usuarioRepository.salvar(usuarioEntity);
        return {usuario: new ListaUsuarioDTO( usuarioEntity.id,usuarioEntity.nome),
             message: 'Usuário criado com sucesso'};
    }

    @Get()
    async listarUsuario(){
       const usuarioSalvos = await this.usuarioRepository.listar();
       const usuarioLista = usuarioSalvos.map(
        usuario => new ListaUsuarioDTO(
            usuario.id,
            usuario.nome
        )
       );

       return usuarioLista;
    }

    @Put('/:id')
    async atualizarUsuario(@Param('id')id: string, @Body() novosDados: AtualizaUsuarioDTO){
       const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

       return {
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado com sucesso'
       }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id:string){
      const usuarioRemovido = await this.usuarioRepository.remove(id)

      return {
         usuario: usuarioRemovido,
         message : 'Usuario removido com sucesso'
      }
    }
};
