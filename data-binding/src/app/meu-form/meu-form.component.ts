import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nomeA: string = "a"
  nomeB: string = "b"
  nomeC: string = "c"

  pessoa: any = {
    nome: 'dev',
    idade: 27
  }

  constructor() { }

  ngOnInit(): void {
  }

}
