
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
const personas=[
    new Persona('Diana', 'carvajal'),
    new Persona('Peych','Urdaneta'),
];

function mostrarPersonas(){
    console.log("mostar")
    let texto="";
    for(let persona of personas){
        console.log(persona);
        texto+=`<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML=texto;
}

function agregarPersona(){
    const forma=document.forms['forma'];
    const nombre=forma['nombre'];
    const apellido=forma['apellido'];
    if(nombre.value!='' && apellido.value!=''){
        const persona= new Persona(nombre.value, apellido.value);
        console.log(persona);
        let idx=personas.indexOf(persona);
        personas.push(persona);
        mostrarPersonas()
    }else{
        alert("Debe ingresar un nombre y apellido");
    }

}