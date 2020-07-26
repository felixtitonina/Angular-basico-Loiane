import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';

  mostrarMenu: boolean = false

  constructor (private authService : AuthService){

  }
  // rever isso na aula 41
  ngOnInit() {
    this.authService.mostrarMenuEmiter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }
}
