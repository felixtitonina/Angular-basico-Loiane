import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight{
      background-color: yellow;
      font-weight: bold;
  }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  cursoAngular: boolean = true
  urlImagem = 'http://lorempixel.com/400/300/nature/'
  nome: string = "abc"
  valorAtual: string = ' '
  valorSalvo: any = ''
  isMouseOver: boolean = false
  nomeA: string = "a"
  nomeB: string = "b"
  nomeC: string = "c"

  pessoa: any = {
    nome: 'dev',
    idade: 27
  }

  nomeDoCurso: string = 'Angular'
  valorInicial: number = 22

  getValor() {
    return 1
  }
  getCustircurso() {
    return true
  }
  botaoClicado() {
    alert("Botão clicado")
  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value // HTMLInputElement usa interface do ts 
  }
  salvarValor(valor) {
  this.valorSalvo = valor
  }
  onMouseOverOut(){
    this.isMouseOver= !this.isMouseOver
  }

  onMudouValor(evento){
    console.log(evento.novoValor)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
