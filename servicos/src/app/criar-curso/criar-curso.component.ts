import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';


@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService], // cria una instancia de service diferente
})
export class CriarCursoComponent implements OnInit {
  // padrão singleton onde tenho apenas uma instancia da classe para toca a aplicação
  cursos: string[] = []

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }

  onAddCurso(curso: string){
    this.cursosService.addCurso(curso)
  }
}
