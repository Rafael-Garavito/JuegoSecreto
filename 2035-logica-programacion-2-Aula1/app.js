let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 12;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el Número Secreto felicidades en ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Tu número es Mayor >');
        } else {
            asignarTextoElemento('p','Tu Número es Menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //sirve para limpiar la caja al dar clic
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';  ESTO ES IGUAL AL ENTERIOR
}

function generoNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numero posibles');
        } else {
            //se busca crear lista de numero judados, para crear aleatorio apartir de ahi
        // si el numero generado esat inluido esta en la lista hacemos una cosa y sino otra
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generoNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto Rafa');
    asignarTextoElemento('p', `Indica un número de 1 a ${numeroMaximo}`);
    numeroSecreto = generoNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje deinicio
    condicionesIniciales();
    // generar el numero aleatorio
    // inicializar el numero de intentos
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');//para reconfiguar visual botones
     
}

condicionesIniciales();

asignarTextoElemento('h2','Este es un juego de adivinar seudo aleatorio');
// esto es una prueba mia/