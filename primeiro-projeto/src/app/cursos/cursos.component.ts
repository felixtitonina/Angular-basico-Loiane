import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string

  cursos: string[]

  constructor(
   private cursosService: CursosService // modificador de acesso | atributo

  ) {
    this.nomePortal = 'http://loiane.training'

    // let servico = new CursosService() // instancia de classe manual 

    this.cursos = this.cursosService.getCursos()
  }

  ngOnInit(): void {
  }

}
