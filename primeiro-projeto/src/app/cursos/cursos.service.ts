import { Injectable } from '@angular/core';

/**
 * Injectable informa que esta classe pode ser instancia em  outra classe 
 */
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Java', 'Ext Js', 'Angular']
  }
}
