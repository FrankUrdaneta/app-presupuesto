class Dato{
    constructor(descripcion, valor){
        this.descripcion=descripcion;
        this.valor=valor;
    }
    get getDescripcion(){
        return this.descripcion;
    }
    set setDescripcion(descripcion){
        this.descripcion=descripcion;
    }

    get getValor(){
        return this.valor;
    }

    set setValor(valor){
        this.valor=valor;
    }
}
class Ingreso extends Dato{
    static contadorIngreso=0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this.id= ++Ingreso.contadorIngreso;
    }
    get getId(){
        return this.id;
    }
}

class Egreso extends Dato{
    static contadorEgresos=0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this.id=++Egreso.contadorEgresos;
    }


    get getId(){
        return this.id;
    }
}

const ingresos=[
    new Ingreso('Sueldo', 2500,00),
    new Ingreso('Venta coche', 5500.00)
];

const Egresos=[
     new Egreso('Renta Depto', 940.00),
     new Egreso('Ropa', 4500),
];

let cargarApp=()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos=()=>{
    let totalIngreso=0;
    for(let ingreso of ingresos){
        totalIngreso+=ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos=()=>{
    let totalEgreso=0;
    for(let egreso of Egresos){
        totalEgreso+=egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero=()=>{
        let presupuesto=totalIngresos()-totalEgresos();
        let porcentajeEgreso=totalEgresos()/totalIngresos();
        document.getElementById('presupuesto').innerHTML= formatoMoneda(presupuesto);
        document.getElementById('porcentaje').innerHTML=formatoPorcentaje(porcentajeEgreso);
        document.getElementById('ingresos').innerHTML=formatoMoneda(totalIngresos());
        document.getElementById('egresos').innerHTML=formatoMoneda(totalEgresos());
}

const formatoMoneda=(valor)=>{
   return  valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimunFractionDigits:2});
}


const formatoPorcentaje=(valor)=>{
    return valor.toLocaleString('en-US', {style:'percent',minimunFractionDigits:2})
}

const cargarIngresos=()=>{
    let ingresosHTML="";
    for(let ingreso of ingresos){
        ingresosHTML+= crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML=ingresosHTML;
}

const crearIngresoHTML=(ingreso)=>{
    let ingresoHTML=`
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
        </button>
      </div>
    </div>
  </div>`;
  return ingresoHTML;
}

const eliminarIngreso=(id)=>{
    let indiceEliminar=ingresos.findIndex(ingreso=>ingreso.id===id);
    ingresos.splice(indiceEliminar,1);//eliminamos solo el elemento del indice indicado
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}


const cargarEgresos=()=>{
    let egresoHTML="";
    for(let egreso of Egresos){
        egresoHTML+= crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML=egresoHTML;
}

const crearEgresoHTML=(egreso)=>{
    let egresoHTML=`
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
        </button>
      </div>
    </div>
  </div>`;
  return egresoHTML;
}

const eliminarEgreso=(id)=>{
    let indiceEliminar=Egresos.findIndex(egreso=>egreso.id===id);
    Egresos.splice(indiceEliminar,1);//eliminamos solo el elemento del indice indicado
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let agregarDato=()=>{
    let forma=document.forms['forma'];
    let tipo=forma['tipo'];
    let descripcion=forma['descripcion'];
    let valor= forma['valor'];
    if(descripcion.value!=='' &&valor.value!==''){
        if(tipo.value==='ingreso'){
            ingresos.push(new Ingreso(descripcion.value,Number(valor.value)))
            cargarCabecero();
            cargarIngresos();
            cargarEgresos();
        }else if(tipo.value==='egreso'){
            Egresos.push(new Egreso(descripcion.value,Number(valor.value)))
            cargarCabecero();
            cargarIngresos();
            cargarEgresos();
        }
    }
}
console.log("ggg")