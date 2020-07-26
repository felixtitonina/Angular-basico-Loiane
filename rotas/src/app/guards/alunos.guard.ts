import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class AlunosGuard implements CanActivateChild {
        canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {
            console.log(route);
            console.log(state);
            if (state.url.includes('editar')) {
                alert('Usuario sem acesso')
                return false
            }
            return true
        }
}