let formato24 = true
function actualizarHora(){

let ahora = new Date()

let horas = ahora.getHours()
let minutos = ahora.getMinutes()
let segundos = ahora.getSeconds()

let periodo = ""

if(!formato24){

periodo = horas >= 12 ? " PM" : " AM"

horas = horas % 12

if(horas == 0){
horas = 12
}

}

if(horas < 10) horas = "0" + horas
if(minutos < 10) minutos = "0" + minutos
if(segundos < 10) segundos = "0" + segundos

document.getElementById("reloj").innerHTML =
horas + ":" + minutos + ":" + segundos + periodo

document.getElementById("fecha").innerHTML =
ahora.toDateString()


}

setInterval(actualizarHora,1000)

actualizarHora()
function cambiarFuente(fuente){

document.getElementById("reloj").style.fontFamily = fuente

}

function cambiarFondoSec(){

document.body.style.backgroundImage =
"url('" + fondos[fondoActual] + "')"

fondoActual++

if(fondoActual >= fondos.length){
fondoActual = 0
}

}

function cambiarFuenteSec(){

document.getElementById("reloj").style.fontFamily =
fuentes[fuenteActual]

fuenteActual++

if(fuenteActual >= fuentes.length){
fuenteActual = 0
}

}

function cambiarColorSec(){

document.getElementById("reloj").style.color =
colores[colorActual]

colorActual++

if(colorActual >= colores.length){
colorActual = 0
}

}

function cambiarFormato(){

formato24 = !formato24

}
let fondoActual = 0
let fuenteActual = 0
let colorActual = 0
let fondos = [
"fondos/img1.jpg",
"fondos/img2.jpg",
"fondos/img3.jpg",
"fondos/img4.jpg"
]

let fuentes = [
"Arial",
"Orbitron",
"Press Start 2P",
"Monoton"
]

let colores = [
"white",
"yellow",
"cyan",
"orange"
]