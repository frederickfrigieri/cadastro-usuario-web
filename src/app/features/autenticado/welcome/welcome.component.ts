import { Component } from '@angular/core';
import { UsuarioLogado } from '../../../shared/models/auth/usuario-logado.modal';
import { UsuarioService } from '../../../shared/services/auth/usuario.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  user?: UsuarioLogado | null;

  constructor(private usuarioService: UsuarioService) {
    this.user = usuarioService.usuarioLogado;
  }
}
