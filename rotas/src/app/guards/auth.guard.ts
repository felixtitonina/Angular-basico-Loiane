import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router'
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router

  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.authService.usuarioEstaAutenticado()) {

      console.log("canActivate");

      return this.verificarAcesso()
    }
  }
  private verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true
    }
    console.log(("verificarAcesso"));

    this.router.navigate(['/login'])
    return false
  }
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
   console.log("canlaod");

    return this.verificarAcesso()
  }
}
