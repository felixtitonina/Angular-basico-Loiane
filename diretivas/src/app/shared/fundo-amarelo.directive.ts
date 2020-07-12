import { Directive, ElementRef } from '@angular/core';
// import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  // selector: '[fundoAmarelo]'
  // selector: 'p[fundoAmarelo]'
  selector: 'button[fundoAmarelo]' // quando quero q seja aplicado apenas em um tag 
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef) {
    console.log(_elementRef)
    // evitar usar ElementRef pois tem vulnerabilidade 
    this._elementRef.nativeElement.style.backgroundColor = 'yellow'
  }

  // Renderer não funciona 
  // constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
  //   console.log(_elementRef)
  //   // evitar usar ElementRef pois tem vulnerabilidade 
  //   // this._elementRef.nativeElement.style.backgroundColor = 'yellow'
  //   this._renderer.setElement(this._elementRef.nativeElement, 'backgroundColor', 'yellho')
  // }

}
