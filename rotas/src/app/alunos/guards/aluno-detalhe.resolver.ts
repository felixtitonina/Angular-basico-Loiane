import { AlunosService } from '../alunos.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Aluno } from '../aluno';

@Injectable() // tudo q for injectable precisa inserir no AlunoDetalheResolver
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let id = route.params['id']
    return this.alunosService.getAluno(id)
  }
}
