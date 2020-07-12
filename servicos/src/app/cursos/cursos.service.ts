import { Injectable } from "@angular/core"

@Injectable()    // aqui falamos que esta classe é injetavel 
// ou seja o angular vai poder intanciar esta classe quando for chamada 
export class CursosService {
    private cursos: string[] = ["angular 2", "java", "nodejs"] 
    constructor(){
        console.log("CursosService")
    }

    getCursos() {
        return this.cursos
    }
    addCurso(curso: string){
        this.cursos.push(curso)
    }
}