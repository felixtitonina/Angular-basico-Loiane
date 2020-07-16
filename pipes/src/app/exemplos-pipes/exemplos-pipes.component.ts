import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms:',
    rating: 4.54321,
    nuemroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.amazon.com.br/'
  }

livros: string[] = ['java', 'Angular 2']

filtro: string

addCurso(valor){
  this.livros.push(valor)
}

obterCursos(){
  if (this.livros.length === 0 || this.filtro === undefined  || this.filtro.trim() === '' ) {
    return this.livros
  }
  return this.livros.filter((v)=>{
    if (v=> v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0) {
      return true
    }
    return false
  }
    
  )
}
  constructor() { }

  ngOnInit(): void {
  }

}
