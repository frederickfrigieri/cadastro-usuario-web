import { Injectable } from '@angular/core';
import { SessionStorageService } from '../session-storage/session-storage.service';
import { TokenService } from '../token/token.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  get usuarioLogado() {
    var token = this.sessionStorage.get(AuthService.chave)
    const usuarioLogado = this.tokenService.decrypt(token);
    
    return usuarioLogado
  }

  constructor(private sessionStorage: SessionStorageService, private tokenService: TokenService) {
  }
}
