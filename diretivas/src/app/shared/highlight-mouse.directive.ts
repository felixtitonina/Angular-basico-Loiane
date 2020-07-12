import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'white'
  }
  // @HostBinding('style.backgroundColor')  backgroundColor: string

  // ou podemos usar get e set do ts para manipular o style
  @HostBinding('style.backgroundColor')  get setColor(){
    return this.backgroundColor
  }
  private backgroundColor: string


  constructor() { }

}
