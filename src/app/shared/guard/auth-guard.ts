import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import { SessionStorageService } from "../services/session-storage/session-storage.service";
import { TokenService } from "../services/token/token.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private sessioStorage: SessionStorageService,
        private tokenService: TokenService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var token = this.sessioStorage.get(AuthService.chave);
        if (token == null) this.router.navigateByUrl('/auth/login');

        var usuarioLogado = this.tokenService.decrypt(token);
        if (usuarioLogado && usuarioLogado.logado) {
            return true;
        } else {
            this.router.navigateByUrl('/auth/login');
        }

        return false;
    }
}