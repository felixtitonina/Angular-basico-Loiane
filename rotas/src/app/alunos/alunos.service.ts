import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {
  private alunos: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@aluno.com.br'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@aluno.com.br'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@aluno.com.br'}
  ]

  getAlunos() {
  return this.alunos
  }

  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      const aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno
      }
    }
    return null
  }
  constructor() { }
}
