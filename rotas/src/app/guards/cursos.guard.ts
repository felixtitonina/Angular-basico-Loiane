import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class CursosGuard implements CanActivateChild {
        canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {
            console.log('Guard de rota lilha ');
            
            return true
        }
}