import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false
  mostrarMenuEmiter = new EventEmitter<boolean> ()
  constructor(
    private router: Router

  ) { }
  fazerLogn(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true
      this.mostrarMenuEmiter.emit(true)
      this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false
      this.mostrarMenuEmiter.emit(false)

    }

  }

}
