import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


const routes: Routes = [
  { path:'cursos', component: CursosComponent},
  { path:'curso/:id', component: CursoDetalheComponent},
  { path:'login', component: LoginComponent},
  { path:'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path:'', component: HomeComponent}
];

// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
