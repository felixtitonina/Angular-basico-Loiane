import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: string[] = []

  cursosService : CursosService
  
  constructor() { // primeiro metodo a ser inicializado | cria a instancia
  this.cursosService = new CursosService() //Criando uma instancia de uma class

  }

  ngOnInit(): void { // primeiro metodo executado executado quando a class for instaciado
    this.cursos = this.cursosService.getCursos()
  }

}
