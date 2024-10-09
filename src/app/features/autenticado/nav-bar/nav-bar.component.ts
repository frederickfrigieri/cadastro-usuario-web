import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  sair() {
    this.authService.logout();
    this.router.navigateByUrl('auth');
  }
}
