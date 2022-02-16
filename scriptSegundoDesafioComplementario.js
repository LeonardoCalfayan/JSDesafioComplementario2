
//Desafio Complementeario 2  - Basado en simulador Desafío 1 coon agregado de arreglo de objetos y uso de algunos métodos 

//Se porpone realizar un simulador interactivo de un sitio de e-comerce de una Pastelería

//Las acciones a realiar serán:
//Presentación y saludo al cliente
//Ofrecer los rubros
//Ofrecer los productos de cada rubro
//Recibir las elecciones del cliente y calcular precio total
//Confirmar el pedido y cobrar el servicio


class Rubro{

    constructor(id, nombre, precio){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }
}

let arrayRubros = []




const saludar = () => alert("Bienvenido a PasteLou!") //funcion para saludar

const inicializar = () =>{
    arrayRubros.push(new Rubro(1,"Tortas Decoradas",150))
    arrayRubros.push(new Rubro(2,"Pastelería Artesanal",175))
    arrayRubros.push(new Rubro(3,"Rincón Salado",200))
    console.log(arrayRubros)
}

const rubrosDisponibles = () => {
   
    let rubroID;
    do{
        let mostrarRubros = "";
        for(let nombreRubros of arrayRubros){
            mostrarRubros += (nombreRubros.id + " " + nombreRubros.nombre + "\n")
        }
        
        rubroID = parseInt(prompt("Ingresá el número del rubro que vas a elegir por favor:\n" + mostrarRubros))


    }while(isNaN(rubroID) || rubroID <= 0 || rubroID >= 4)

    return(arrayRubros.find((rubro => rubro.id === rubroID)))

    
 //   return rubroElegido.nombre;

}



const calcularPrecio = (rubroElegido) => {    
    return(rubroElegido.precio)

}

let texto = "";
let total = 0;

const informarCompra = (rubroElegido, precioProducto) =>{

    total += precioProducto
    texto += `Producto: ${rubroElegido.nombre}\n Importe: ${precioProducto}\n`;
    
    let seguir = confirm("Desea agregar otro producto?")
    if(seguir === true){

        procedimientoCompra()
    }else{
        alert("Usted lleva:\n" + texto + `\nEl importe total es ${total}` );

    }

}

const cobrarProductos = () =>{
    let monto = 0;
    
    do{
        monto = parseInt(prompt("Con cuanto abonás?"));
    }while(isNaN(monto))
    
    if(monto > total){
        alert("Tu vuelto es $"+(monto - total)+"\nGracias por tu compra!")
    }else if(monto === total){
        alert("Gracias por tu compra!")
    }else{
        alert("Te faltarían $"+(total-monto))
    }

    
}

const procedimientoCompra = () =>{
    let rubroElegido = rubrosDisponibles();
    let precioProducto = calcularPrecio(rubroElegido);
    informarCompra(rubroElegido, precioProducto);

}

saludar();
inicializar();
procedimientoCompra();
cobrarProductos();