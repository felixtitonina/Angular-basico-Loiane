import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {
  aluno: any
  inscricao: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService

  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
    let id = params['id']

    this.aluno = this.alunosService.getAluno(id)
    })
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }
  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }
}
