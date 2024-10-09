import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomerService } from '../../../shared/services/customer/customer.service';
import { RegistrandoCustomerModel } from '../../../shared/models/customer/registrando-customer.model';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      nomeCompleto: ['', [Validators.required, Validators.min(3)]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      confirmeSenha: ['', [Validators.required, this.compararSenhas]]
    })
  }

  registrar() {
    if (this.form.valid) {
      const { nomeCompleto, email, senha } = this.form.value;
      const model = new RegistrandoCustomerModel(nomeCompleto, email, senha);
      this.customerService.criarCliente(model).subscribe(resp => {
        this.authService.logar(model).subscribe((response) => {
          if (response == null) {
            this.router.navigate(['/auth/login'])
          } else {
            this.router.navigate(['/welcome'])
          }
        });
      })
    }
  }

  get email() {
    return this.form.get('email');
  }

  get nomeCompleto() {
    return this.form.get('nomeCompleto');
  }

  get senha() {
    return this.form.get('senha');
  }

  get confirmeSenha() {
    return this.form.get('confirmeSenha');
  }

  compararSenhas = (confirmeSenha: FormControl): ValidationErrors | null => {
    if (this.form) {
      const isValid = this.senha && confirmeSenha && this.senha.value != confirmeSenha.value ? { confirmeSenhaInvalido: true } : null;
      return isValid;
    } else {
      return null;
    }
  }
}
