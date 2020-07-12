import { Injectable } from "@angular/core"

@Injectable()    // aqui falamos que esta classe é injetavel 
// ou seja o angular vai poder intanciar esta classe quando for chamada 
export class CursosService {
    getCursos() {
        return ["angular 2", "java", "nodejs"]
    }
}