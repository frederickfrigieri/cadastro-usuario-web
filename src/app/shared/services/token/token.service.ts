import { Injectable } from '@angular/core';
import { UsuarioLogado } from '../../models/auth/usuario-logado.modal';
// import { jwtDecode } from "jwt-decode";
import { SessionStorageService } from '../session-storage/session-storage.service';
import { AuthService } from '../auth/auth.service';
import { Customer } from '../../models/customer/costumer.modal';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private sessionStorage: SessionStorageService) { }

  decrypt(token: string): UsuarioLogado | null {
    const data = JSON.parse(this.sessionStorage.get(AuthService.chave)) as UsuarioLogado;

    if (data!) {
      return { chaveUsuario: data.chaveUsuario, logado: true, nomeCompleto: data.nomeCompleto, email: data.email };
    } else {
      return null;
    }

    // var jsonToken = jwtDecode<any>(token);
    // var usuario = {
    //   chaveUsuario: jsonToken['nameid'],
    //   logado: true,
    //   login: jsonToken.actort,
    //   perfil: jsonToken.perfil
    // } as UsuarioLogado;
    // return { chaveUsuario: 'test', logado: true, login: 'fred', perfil: '' };
  }

}
