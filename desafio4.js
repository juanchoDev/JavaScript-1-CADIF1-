// Declaracion de variables

var nombreMedicina = [];
var precioMedicina = [];
var registrar = false;
var contador = 0;
var cambiarPrecio = false;

//Entradas

do {
    // for valida que no exista el medicamento y si existe pregunta si desea añadir nuevo precio
   
        for (let i = 0; i <= nombreMedicina.length; i++) {
            

            if (precioMedicina.length == nombreMedicina.length && registrar == true){      
            let auxNombre = prompt("¿Nombre de la medicina que quiere registrar?");

                while (auxNombre === '' || auxNombre === null) {
                    alert("¡POR FAVOR, INGRESE UN NOMBRE!")
                    auxNombre = prompt("¿Nombre de la medicina que quiere registrar?");
                }

            let index = nombreMedicina.indexOf(auxNombre);

            if (index == -1) {
                nombreMedicina.push(auxNombre);
            }
                //modifica precio de medicina ya existente si el usuario lo desea
            if (index != -1) {
                cambiarPrecio = confirm(`Este medicamento ya se encuentra registrado, su precio es ${precioMedicina[index]} , ¿desea cambiar el precio?`);
                registrar = false;
                if (cambiarPrecio == true) {
                    let nuevoPrecio = prompt(`Ingrese el nuevo precio de ${auxNombre}`);
                    nuevoPrecio = parseInt(nuevoPrecio);
                    precioMedicina.splice(index, 1, nuevoPrecio);
                    alert(`EL PRECIO DEL PRODUCTO ${auxNombre} HA SIDO MODIFICADO POR ${nuevoPrecio} $`)
                }
            }  
        }

        cambiarPrecio = false;
        }
        
        if (cambiarPrecio == false) {
            //for añade precio de nueva medicina
            for (let i = 0; i <= precioMedicina.length; i++) {
         
                if (precioMedicina.length != nombreMedicina.length){ 
                let auxPrecio = prompt("Ingrese el precio de la medicina que desea registrar:");
                auxPrecio = parseInt(auxPrecio);
    
                    while (auxPrecio <= 0 || isNaN(auxPrecio)) {
                        alert("¡INGRESE UN PRECIO CORRECTO!")
                        auxPrecio = prompt("Ingrese el precio de la medicina que desea registrar:");
                        auxPrecio = parseInt(auxPrecio);
                    }

                precioMedicina.push(auxPrecio);
                registrar = false;
                }
            }
        }

        if (registrar == false) {
            registrar = confirm("¿Desea registrar un NUEVO medicamento?");

                if (precioMedicina.length == 0 && nombreMedicina == 0 && registrar == false) {
                    alert("NO SE HA REGISTRADO NINGÚN PRODUCTO");
                }
        }


} while (registrar == true) 

//Imprime los datos en consola
    console.warn(`TOTAL PRODUCTOS REGISTRADOS: ${nombreMedicina.length} `)
    for (let index = 0; index < nombreMedicina.length; index++) {
        console.log(`${index+1}. ${nombreMedicina[index]} - Precio: ${precioMedicina[index]}$`) 
    }

//Tabla   
    console.warn(`MOSTRADOS EN TABLA:`)
    todosLosDatos = [nombreMedicina, precioMedicina];
    console.table(todosLosDatos);
    


