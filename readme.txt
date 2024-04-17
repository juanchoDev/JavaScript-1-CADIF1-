Requerimientos generales:
Por favor atienda correctamente a los requerimientos listados a continuación:

Requerimientos específicos:
1.- Establezca en su pagina web .html un div que contiene a su vez dos div, estos se distribuyen el espacio horizontal a partes iguales. Uno de estos div internos debe ser de color verde y el otro de color rojo y uno de ellos debe tener el texto "Agregar" y el otro "Sustraer". Puede usar la maqueta suminstrada como archivo adjunto.

2.- Establezca en un archivo de javascript una variable que almacene un arreglo llamado nombres y otro arreglo llamado cantidad. Estos arreglos deben ser arreglos paralelos (es decir cada indice de cada arreglo relaciona el dato con el dato almacenado con el mismo indice en el otro arreglo). Inicialice cada arreglo con los siguientes datos:
nombre = ["articulo1", "articulo2", "articulo3"] y cantidad = [1, 5, 10]

3.- Programar una funcion llamada "adicionaOSustrae" que reciba tres parametros, uno de ellos debe ser el nombre, otro la cantidad y otro la accion (este parametro dicotomico le indicará a la funcion que debe hacer, dependiendo determinara si adiciona o sustrae). Esta funcion debe ubicar el indice de control basado en el nombre suministrado en el parametro una vez hecho eso segun el tercer parametro debe determinar si adicionará o sustraerá este control debe hacer con condicional doble. (if else) y luego debe realizar la accion especifica adicionar o sustraer del arreglo cantidad el valor indicado por parametro.
Ejemplo: se llama a la funcion nombreFuncion("articulo2", 2, "adiciona")
Entonces dentro de esta funciona busca primero si articulo2 existe en el arreglo nombre y devuelve el indice de su posicion. Entonces segun se indica se adicionará, se ubica el indice en este caso 1, y se le suma a 5 los 2 que se pasaron por parametro a la funcion. Sebe editar el arreglo cantidad para que al final su registro quede asi: cantidad = [1, 7, 10]
De manera analoga se realiza la logica en caso de indicar "sustraer"

4.- Establezca que al dar click en el div "sustraer" o "adicionar" se llame a una funcion llamada "realizarAccion". Al momento de ejecutar debe solicitar (las solicitudes deben hacerse por medio de prompts, procure validar el ingreso de datos) el nombre del articulo a modificar, guarde ese nombre en una variable auxiliar dentro de esa funcion. Luego solicite la cantidad (bien sea para adicionar o sustraer segun sea el caso indicado por el div presionado). Ademas programe que si se da click en el div "adicionar" se establezca una variable local a la funcion "realizarAccion" con el valor "adicionar". Luego de tener el nombre , cantidad y naturalmente la variable de control auxiliar con el valor necesario ya sea "adicionar" o "sustraer" segun sea el caso debe llamar internamente a la funcion del requerimiento 4 (adicionaOSustrae) y debe pasarle los parametros nombre cantidad y control. Esto realizará la accion indicada.
Sugerencia: Puede definir la funcion "realizarAccion" con un parametro formal, por ejemplo "control", de forma tal que cuando programe el onclick del div pase por parametro al accion que requiere ejecutar.
Ejemplo: Se da click al div "adicionar" entonces en el onclick de dicho div puede hacer el llamado asi: onclick="realizarAccion('adicionar')".
Asi ya esta preestableciendo que realizara una suma.

5.- Programe que al dar click en el div padre este muestre a traves de un alert la informacion de los articulos y su cantidad. Realice un ciclo "for" para mostrar como se indica:
Ejemplo:
nombre: articulo1; cantidad: 1
nombre: articulo2; cantidad: 7 ...
Ademas debe preveer el burbujeo de eventos que se puede suscitar al dar click en los div "adicionar" y "sustraer". Es decir al dar click en los divs hijo NO SE DEBE EJECUTAR EL ALERT DE ESTE REQUERIMIENTO.