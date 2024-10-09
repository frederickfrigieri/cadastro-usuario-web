import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from '../../../../shared/services/empresa/empresa.service';
import { RegistrarEmpresaModel } from '../../../../shared/models/empresas/registrar-empresa.model';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../shared/services/auth/usuario.service';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrl: './registrar-empresa.component.css'
})
export class RegistrarEmpresaComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private empresaService: EmpresaService,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.form = this.formBuilder.group({
      razaoSocial: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.minLength(14)]],
      responsavel: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      cidade: ['', [Validators.required, Validators.minLength(4)]],
      estado: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      endereco: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get razaoSocial() {
    return this.form.get('razaoSocial')
  }

  get cnpj() {
    return this.form.get('cnpj')
  }

  get responsavel() {
    return this.form.get('responsavel')
  }

  get cep() {
    return this.form.get('cep')
  }

  get cidade() {
    return this.form.get('cidade')
  }

  get estado() {
    return this.form.get('estado')
  }

  get endereco() {
    return this.form.get('endereco')
  }

  registrar() {
    if (this.form?.invalid) return;

    const customerId = this.usuarioService.usuarioLogado?.chaveUsuario as string;
    const { razaoSocial, cnpj, responsavel, cep, cidade, estado, endereco } = this.form.value
    const model = new RegistrarEmpresaModel(razaoSocial, cnpj, responsavel, cep, cidade, estado, endereco, customerId);

    this.empresaService.registrar(model).subscribe(resp => {
      this.router.navigateByUrl("empresas")
    });
  }

}
