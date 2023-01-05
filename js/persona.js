class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    get getnombre(){
        return this.nombre;
    }
    set setnombre(nombre){
        this.nombre=nombre;
    }
    
    get getapellido(){
        return this.apellido;
    }
    set setapellido(apellido){
        this.apellido=apellido;
    }
}