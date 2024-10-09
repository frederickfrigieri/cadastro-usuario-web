import { Component } from '@angular/core';
import { UsuarioLogado } from '../../../shared/models/auth/usuario-logado.modal';
import { UsuarioService } from '../../../shared/services/auth/usuario.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-dados.component.html',
  styleUrl: './meu-dados.component.css'
})
export class MeuDadosComponent {

  usuarioLogado?: UsuarioLogado | null;

  constructor(private usuarioService: UsuarioService) {
    this.usuarioLogado = usuarioService.usuarioLogado;
  }
}
