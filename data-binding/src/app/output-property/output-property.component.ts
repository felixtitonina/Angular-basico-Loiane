import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // inputs: ['valor'], outra forma de usar input 
  // outputs: ['mudouValor'], outra forma de usar output
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0 // usamos este decoreitor para expor uma variavel para  o pai componente

  @Output() mudouValor = new EventEmitter() // isto e uma classe do core angular, usamos este decoreitor para expor um evento para o pai componente 
  incrementa() {
    this.valor++
    this.mudouValor.emit({ novoValor: this.valor })
  }

  decrementa() {
    this.valor--
    this.mudouValor.emit({ novoValor: this.valor })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
