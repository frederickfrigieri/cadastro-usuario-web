import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticadoComponent } from './autenticado.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MeuDadosComponent } from './meu-dados/meu-dados.component';
import { MinhaEmpresaComponent } from './empresas/minha-empresa/minha-empresa.component';
import { RegistrarEmpresaComponent } from './empresas/registrar-empresa/registrar-empresa.component';
import { EmpresaComponent } from './empresas/empresa.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BoxDetailComponent } from "./box-detail/box-detail.component";
import { BoxContainerComponent } from './box-container/box-container.component';

const routes: Routes = [
  {
    path: '',
    component: AutenticadoComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'perfil',
        component: MeuDadosComponent
      },
      {
        path: 'empresas',
        component: EmpresaComponent,
        children: [
          {
            path: '',
            component: MinhaEmpresaComponent
          },
          {
            path: 'registrar',
            component: RegistrarEmpresaComponent
          }
        ]
      },
    ]
  },
]


@NgModule({
  declarations: [
    AutenticadoComponent,
    MeuDadosComponent,
    EmpresaComponent,
    MinhaEmpresaComponent,
    RegistrarEmpresaComponent,
    NavBarComponent,
    BoxDetailComponent,
    BoxContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AutenticadoModule { }