import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {
  // set, toda vez q for modificado 
  @Input() set ngElse(condition: boolean) {
    if (!condition) {
    this._viewContainerRef.createEmbeddedView(this._templateRef)
    }else{
      this._viewContainerRef.clear()
    }
  }
  constructor(
    private _templateRef:TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
   ) { }

}
