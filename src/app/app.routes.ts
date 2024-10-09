import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth-guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        loadChildren: () => import('./features/autenticado/autenticado.module').then(m => m.AutenticadoModule),
        canActivate: [AuthGuard]
    },
];
