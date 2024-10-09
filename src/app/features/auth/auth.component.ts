import { Component } from '@angular/core';
import { SessionStorageService } from '../../shared/services/session-storage/session-storage.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(private sessionStoare: SessionStorageService, private router: Router) {
    var existeSessao = sessionStoare.get(AuthService.chave);

    if (existeSessao) this.router.navigateByUrl('/welcome');
  }

}
