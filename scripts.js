//seleccionamos los elementos del DOM
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let mesj_correccion = document.querySelector("#msj_correccion");
let operacion = document.querySelector("#operacion");
let operacion_actual;
//en n1 y n2 voy a gusrdar los numeros aleatorios de cada operacion
let n1, n2;

//funcion suma
function btnSumar(){
    //limpiamos el div del contenedor de las correcciones
    msj_correccion.innerHTML = "";

    //agregamos la clase activa al boton suma y la quitamos al resto
    activaBoton("suma");
    operacion_actual = "+";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML = " + ";
    //generamos los numeros aleatorios de la suma
    nuevaSuma();

}

function nuevaSuma(){
    //generamos numeros aleatorios desde 0 y 9
    n1 = parseInt(Match.random()*10);
    n2 = parseInt(Match.random()*10);
    //asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el curso en el input
    respuesta_usuario.focus();
}

//funcion producto
function btnProducto(){
    //limpiamos el div del contenedor de las correcciones
    msj_correccion.innerHTML = "";

    //agregamos la clase activa al boton producto y la quitamos al resto
    activaBoton(" producto ");
    operacion_actual = "*";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML = " x ";
    //generamos los numeros aleatorios de la suma
    nuevoProducto();

}

function nuevoProducto(){
    //generamos numeros aleatorios desde 0 y 9
    n1 = parseInt(Match.random()*10);
    n2 = parseInt(Match.random()*10);
    //asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el curso en el input
    respuesta_usuario.focus();
}

//funcion resta
function btnResta(){
    //limpiamos el div del contenedor de las correcciones
    msj_correccion.innerHTML = "";

    //agregamos la clase activa al boton suma y la quitamos al resto
    activaBoton("resta");
    operacion_actual = "-";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML = " - ";
    //generamos los numeros aleatorios de la suma
    nuevaResta();

}

function nuevaResta(){
    //generamos numeros dun aleatorios desde 5 y 10
    n1 = parseInt(Match.random()* 5 + 5);
    //generamos numeros aleatorios desde 5 y 9
    n2 = parseInt(Match.random()*5);
    //asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el curso en el input
    respuesta_usuario.focus();
}

//funcion division

function btnDivision(){
    //limpiamos el div del contenedor de las correcciones
    msj_correccion.innerHTML = "";

    //agregamos la clase activa al boton suma y la quitamos al resto
    activaBoton("division");
    operacion_actual = "/";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML = " / ";
    //generamos los numeros aleatorios de la suma
    nuevaDivision();

}

function nuevaDivision(){
    //Aqui voy a guardar los divisores del numero a dividir
    let divisores = [];

    //generamos un numero aleatorio entro 1 y 10
    n1 = parseInt(Math.random()*9 + 1);

    //encontramos los divisores del numero generado y lo guardamos en el arreglo
    for( var i=1; i<=n1;i++){
        if(n1%i===0){// es divisor
            divisores.push(i);

            //seleccionamos un posicion aleatorio de los numeros que son divisores
            let pos = parseInt(Math.random()*(divisores.length));
            
            n2 = divisores[pos];
            num1.innerHTML = n1;
            num2.innerHTML = n2;
            respuesta_usuario.focus();

        }
    }

    //funcion que controla si la respuesta es correcta
    function corregir(){
        //si el usuario  no ha ingresado nada no continuo
        if(respuesta_usuario.value==""){
            return;
        }
        let solucion;
        //armo la operacion que se genero una variable y veo cual es el resultado
        //en este caso el operador + es para concatener las cadenas
        let operacion = n1 + operacion_actual + n2;
        solucion =eval(operacion);

        //creo un elemento i para agregar el icono de  correcto o incorrecto
        var i = document.createElement(i);
        //controlo si coincide lo que el usuario respondio con la respuesta
        if(respuesta_usuario.value== solucion){
            i.classname = "fa-regular fa-face-grin";
        }else{
            i.classname = "fa-regular fa-face-frowm";
        }

        //agrego elemento contenedor e las correcciones
        msj_correccion.appenChild(i);

        //controlo que tipo de operacion estoy para generar una nueva operacion
        if(operacion_actual == "+"){
            nuevaSuma();
        }else if(operacion_actual == "-"){
            nuevaResta();
        }else if(operacion_actual == "*"){
            nuevoProducto();
        }else if(operacion_actual == "/"){
            nuevaDivision();
        }

        }

        //limpio el input
        respuesta_usuario.value *"";

    }

    //agrego el input el onkeydown para detectar cuando se presiona enter y
    //llamar directamnte la funcion corregir()
    respuesta_usuario.onkeydown = function(e){
        var ev = document.all?window.Event : e;
        if(ev.key.Code == 13){
            corregir();
        }
    }

    






//esta funcion la creamos luego, cuando tengamos listo los estilos
function activaBoton(idBoton){
       document.getElementById("suma").className ="";
       document.getElementById("resta").className ="";
       document.getElementById("producto").className ="";
       document.getElementById("division").className ="";
       document.getElementById(idBoton).className ="activado";
}

