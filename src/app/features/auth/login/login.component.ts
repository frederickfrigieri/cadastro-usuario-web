import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, LogarResponse } from '../../../shared/services/auth/auth.service';
import { UsuarioLogando } from '../../../shared/models/auth/usuario-logando.modal';
import { SessionStorageService } from '../../../shared/services/session-storage/session-storage.service';
import { Customer } from '../../../shared/models/customer/costumer.modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private formBuild = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  protected form = this.formBuild.group({
    email: ['', [Validators.email, Validators.required]],
    senha: ['', [Validators.required]]
  })

  get senha() {
    return this.form.get('senha');
  }

  get email() {
    return this.form.get('email');
  }

  protected usuarioNaoEncontrado = false;

  logarResponse?: LogarResponse | null;

  logar() {
    if (this.form.valid) {
      const model = this.form.value as UsuarioLogando;
      this.authService.logar(model).subscribe((response) => {
        if (response != null) {
          this.router.navigate(['/welcome'])
          this.usuarioNaoEncontrado = true;
        }
        this.logarResponse = response;
      });
    }
  }

  registrar() {
    this.router.navigate(['/auth/register'])
  }
}
