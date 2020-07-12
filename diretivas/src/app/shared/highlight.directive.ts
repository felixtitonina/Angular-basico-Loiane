import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor
  }
  @HostBinding('style.backgroundColor')  backgroundColor: string

  @Input() defaultColor: string = 'white'
  @Input() highlightColor: string = 'yellow'
  constructor() {   }
  
  ngOnInit(){ // inicia a variavel
    this.backgroundColor = this.defaultColor
  }
}
