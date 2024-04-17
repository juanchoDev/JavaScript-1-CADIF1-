//Declaración e inicialización de variables

var nombres = ["articulo1", "articulo2", "articulo3"];
var cantidades = [1, 5, 10];

//Funcion que elimina o sustrae cantidad

function adicionaOSustrae(nombre, cantidad, accion) {
    let indice = nombres.indexOf(nombre);

    if (accion ===  'adicionar') {
        cantidades[indice] = cantidades[indice]+cantidad;
    } else if (accion === 'sustraer'){
        cantidades[indice] = cantidades[indice]-cantidad;
    }

}

//Funcion para validad cantidad correcta

function validarCantidad(cantidad) {
    if (isNaN(cantidad) == true || cantidad < 0) {
        alert("INGRESE UNA CANTIDAD CORRECTA")
    }
}

//Funcion que realiza la acción

function realizarAccion(accion, event) {
    event.stopPropagation();
    let nombre;
    let cantidad;
    nombre = prompt(`Ingrese el nombre del articulo (${nombres})`);

    if (nombres.includes(nombre)){
        
        do {
            cantidad = parseInt(prompt("Ingrese la cantidad"));
            validarCantidad(cantidad);
        } while (isNaN(cantidad) || cantidad < 0){
            
        }
        
    } else {
        alert("EL ARTICULO NO EXISTE")
    }
   
    adicionaOSustrae(nombre, cantidad, accion)
}


//Funcion para mostrar articulos al hacer click en el div padre

function mostrarArticulos() {
    let mensaje = '';
    for (let i = 0; i < nombres.length; i++) {
        mensaje = mensaje+`Nombre: ${nombres[i]} -> Cantidad: ${cantidades[i]}\n`;
    }
    alert(mensaje);
}

//Funcion adicional para agregar o eliminar articulos a la lista (estaba aburrido)

function agregarOEliminar(accion, event) {
    event.stopPropagation();
    let nombre = '';
    let cantidad = 0;
    if (accion === 'agregar') {
        nombre = prompt(`Ingrese el nombre del articulo que desea AGREGAR`)
    } else if (accion === 'eliminar') {
        nombre = prompt(`Ingrese el nombre del articulo que desea ELIMINAR (${nombres})`)
    }
    let indice = nombres.indexOf(nombre);

        if (indice == -1 && nombre != null && nombre !="" && accion == 'agregar') {
            nombres.push(nombre)

            do {cantidad = parseInt(prompt("Ingrese la cantidad disponible de este articulo"))
            validarCantidad(cantidad);
         }
            while (isNaN(cantidad) || cantidad < 0) {
            cantidades.push(cantidad)
         }
        } else if (indice !== -1) {
            alert("ESTE ARTICULO YA EXISTE")
        }   else {
            alert("INGRESE UN NOMBRE CORRECTO")
        }

        if (indice !== -1 && accion == 'eliminar') {
            let eliminar = confirm(`¿Está seguro de que desea eliminar ${nombre}?`)
            if (eliminar == true) {
                nombres.splice(indice, 1)
                cantidades.splice(indice, 1)
                alert(`EL ARTICULO ${nombre} EN LA POSICIÓN ${indice} HA SIDO ELIMINADO`)
            } else {
                alert(`El articulo ${nombre} sigue en la lista`)
            }
        }
    
}
