import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService], // cria una instancia de service diferente
})
export class CursosComponent implements OnInit {
  cursos: string[] = []

  // cursosService: CursosService // exemplo 1 sem o private

  constructor( private cursosService: CursosService) { // primeiro metodo a ser inicializado | cria a instancia
    // this.cursosService = new CursosService() //Criando uma instancia de uma class
    // this.cursosService = _cursosService // exemplo 1 sem o private
  }

  ngOnInit(): void { // primeiro metodo executado executado quando a class for instaciado
    // this.cursos = this._cursosService.getCursos()  // exemplo 1 sem o private
    this.cursos = this.cursosService.getCursos() 
    // this.cursosService.emitirCursoCriado.subscribe( // aqui nos registramos para poder receber notificação de usos da funcao emitirCursoCriado
    //   curso => console.log(curso)
    // )

     CursosService.criouNovoCurso.subscribe( // a partir CursosService. temos acessoa ao metodos e propriedade static
       curso => this.cursos.push(curso)
     )

  }

}
