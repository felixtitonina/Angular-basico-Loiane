import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
@NgModule({
  declarations: [
    AppComponent,
    // ReceberCursoCriadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [CursosService],  // como estamos colocando o CursosService no app.module ele vai esta disponivel em toda a instancia da aplicação

  bootstrap: [AppComponent]
})
export class AppModule { }
