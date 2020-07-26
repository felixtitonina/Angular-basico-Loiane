import { AlunosGuard } from './guards/alunos.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';
import { AppRoutingModule } from './app-routing.module';
// import { routing } from './app-routing.module'
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,

      /*
      CursoDetalheComponent,
      CursoNaoEncontradoComponent,
      */
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      // CursosModule,
      // AlunosModule,
      AppRoutingModule,
      //routing
   ],
   providers: [
      AuthService,
      AuthGuard,
      CursosGuard,
      AlunosGuard

      /*CursosService*/
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
