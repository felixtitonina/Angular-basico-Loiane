import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component'

import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [ // metadado
    AppComponent, // componente, diretivas e pipes que queremos listar
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [  // metadado
    BrowserModule, // inserimos outros modulos 
    AppRoutingModule,
    CursosModule
  ],
  providers: [], // colocamos todos os serviçoes q vao esta diponivel para todos os componentes, verificação de login, de forma global
  bootstrap: [AppComponent] // informa o componente principal
})
export class AppModule { }
// modulo de raiz