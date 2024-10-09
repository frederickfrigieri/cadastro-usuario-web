import { Component, inject } from '@angular/core';
import { Empresa } from '../../../../shared/models/empresas/empresa.model';
import { EmpresaService } from '../../../../shared/services/empresa/empresa.service';
import { UsuarioService } from '../../../../shared/services/auth/usuario.service';

@Component({
  selector: 'app-minha-empresa',
  templateUrl: './minha-empresa.component.html',
  styleUrl: './minha-empresa.component.css'
})
export class MinhaEmpresaComponent {

  private empresaService = inject(EmpresaService);
  private usuarioService = inject(UsuarioService);
  
  empresa?: Empresa;

  ngOnInit(): void {

    const user = this.usuarioService.usuarioLogado;

    if (user)
      this.carregarItems(user!.chaveUsuario);
  }

  carregarItems(customerId: string) {
    this.empresaService.obter().subscribe(resp => {
      const item = resp.find(x=>x.customerId == customerId);
      this.empresa = item;
    })
  }
}
