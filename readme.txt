Requerimientos generales:
En base a las plantillas web suministradas a continuación, crear los scripts de Javascript necesarios para cumplir con los requerimientos listados a continuación. PD: RECUERDE EL STOP PROPAGATION EN LOS OTROS ELEMENTOS QUE TENGAN PROGRAMADO UN ONCLICK PARA QUE SOLO SE DISPARE LO QUE DESEA ALLA SIN NECESARIAMENTE DISPARAR OTOS EVENTOS!!! Archivo Adjunto Archivo Adjunto Archivo Adjunto

Requerimientos específicos:
1.- Programe que al dar click en el elemento con id=btnSubir se pregunte a través de un confirm: "Desea ir arriba?" en caso afirmativo desplace EL SCROLL DE LA VENTANA a la parte superior de la pagina. Establezca el desplazamiento suavizado.

2.- Establezca un arreglo con 15 colores.
De allí programe que las variables a, b, c, d, e sean aleatorios tomados de dicho arreglo.
Programe que al dar click en cualquier elemento de la pagina (es decir programar el body que al dar click llame a una función que puede llamar "cambiarFondo") cambie el background del body a como se indica a continuación: ( linear-gradient(to right bottom, a, b, c, d, e)). Use interpolación o concatene con antelación, el valor de string que pasará a la propiedad background.

Use bgColor para cambiar el color del fondo del background.

RECUERDE EL STOP PROPAGATION EN LOS OTROS ELEMENTOS QUE TENGAN PROGRAMADO UN ONCLICK PARA QUE SOLO SE DISPARE LO QUE DESEA ALLA SIN NECESARIAMENTE DISPARAR ESTE EVENTO!!!

3.- Programar que al dar click en el elemento del nav con contenido "Iniciar Sesion" abra una nueva ventana, en esta ventana debe abrir la plantilla suministrada en este proyecto llamada "login.html"

4.- Programar que la ventana al abrir en el requerimiento anterior tenga un tamaño de ancho y alto de forma tal que abarque la cuarta parte de la pantalla. Recuerde que debe basar su código en base al tamaño de cualquier pantalla, no use valores estáticos para este fin, la idea es que sin importar donde se despliegue dicha ventana se despliegue igual.

5.- En la ventana recién creada agregue dos botones, uno para cerrar la ventana al dar click en él, y otro que redireccione la pagina "abridora" a la pagina cadif1.com