import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild, CanDeactivate } from '@angular/router';

import { AlunosGuard } from './../guards/alunos.guard';
import { AlunosComponent } from './alunos.component';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';

const alunosRoutes = [
  {
    path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent },
      {
        path: ':id', component: AlunoDetalheComponent,
        resolve: {aluno : AlunoDetalheResolver}
      },
      {
        path: ':id/editar', component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard]
      }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})

export class AlunosRoutingModule { }
