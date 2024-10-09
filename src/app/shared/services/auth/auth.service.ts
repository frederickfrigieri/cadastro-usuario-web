import { inject, Injectable } from '@angular/core';
import { UsuarioLogando } from '../../models/auth/usuario-logando.modal';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { UsuarioLogado } from '../../models/auth/usuario-logado.modal';
import { Customer } from '../../models/customer/costumer.modal';
import { SessionStorageService } from '../session-storage/session-storage.service';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly chave = 'auth-token-rh-360';
  private sessionStorage = inject(SessionStorageService);

  constructor(private httpClient: HttpClient) { }

  logar({ email, senha }: UsuarioLogando): Observable<LogarResponse | null> {
    const response = new Subject<LogarResponse | null>();
    const endpoint = `${environment.baseUrl}/customers`;
    this.httpClient.get<Customer[]>(endpoint).subscribe({
      next: (items) => {
        const user = items.find(item => item.email == email && item.senha == senha);
        if (user) {
          const usuarioLogado = new UsuarioLogado(user.id, true, user.email, user.nomeCompleto);
          this.sessionStorage.add(AuthService.chave, usuarioLogado);
          const success = true;
          const data = new LogarResponse(usuarioLogado, success)
          response.next(data);
        } else {
          response.next(new LogarResponse(null, true))
        }
      },
      error: (e) => {
        console.log(e);
        response.next(new LogarResponse(null, false))
      }
    });

    return response.asObservable();
  }

  logout() {
    this.sessionStorage.remove(AuthService.chave);
  }
}

// const user = items.find(item => item.email == email && item.senha == senha);
// if (user) {
//   const usuarioLogado = new UsuarioLogado(user.id, true, user.email, user.nomeCompleto);
//   this.sessionStorage.add(AuthService.chave, usuarioLogado);
//   const success = true;
//   const data = new LogarResponse(usuarioLogado, success)
//   response.next(data);
// } else {
//   response.next(new LogarResponse(null, true))
// }

// console.log(error);
// response.next(new LogarResponse(null, false))


export class LogarResponse {
  constructor(public usuario: UsuarioLogado | null, public success: boolean) { }
}