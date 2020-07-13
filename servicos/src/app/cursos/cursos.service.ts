import { Injectable, EventEmitter } from "@angular/core"

@Injectable()    // aqui falamos que esta classe é injetavel 
// ou seja o angular vai poder intanciar esta classe quando for chamada 
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>() // só com a instancia da class  CursosService q conseguirimos acessar este atributo
    static criouNovoCurso = new EventEmitter<string>()
    // quando declaramos um atributo ou metodo como static 
    // isso se significa que não precisamos da instanticia da class(CursosService)
    //  para poder acessar o mesmo 
    // deste forma quando as duas instancia CursosService forem criadas esta varivel sera compartilhada  

    private cursos: string[] = ["angular 2", "java", "nodejs"] 
    constructor(){
        console.log("CursosService")
    }

    getCursos() {
        return this.cursos
    }
    addCurso(curso: string){
        this.cursos.push(curso)
        this.emitirCursoCriado.emit(curso)
        CursosService.criouNovoCurso.emit(curso)
    }
}