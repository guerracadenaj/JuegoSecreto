let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento( elemento , texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
   }else{
   if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
    
}
}
console.log(numeroSecreto);
function verificarIntento(){

    //atributo id
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} intentos felicidades`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario> numeroSecreto){
            asignarTextoElemento('p',`El numero es menor llevas ${intentos} intentos`);        
        }else{
        asignarTextoElemento('p',`El numero es mayor llevas ${intentos} intentos`);
    }
    intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value="";
}
function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
   
    //deshabilitar el boton de nuevo juego

    //Inicializar el numero intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
