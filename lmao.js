function user(nombre, edad, ciudad) {
    this.nombre = prompt("ingrese su nombre");
    this.edad   = prompt ("ingrese su edad");
    this.ciudad  = prompt("ingrese ciudad de residencia");
}

user()
alert(`DATOS DE USUARIO:\nNOMBRE: ${nombre}\nEDAD: ${edad}\nRESIDENCIA: ${ciudad}`)

let envio = 0
let iva = 0
let aduana = 0

impuestos()
function impuestos(){
let precio = (prompt("ingrese el precio de el producto a comprar"))

iva = (precio * 1.5 + 0.10)
}

viaje()
function viaje(){
let valor = (prompt("ingrese la zona del pais, a la que pertenece:\nnorte\ncentro\nsur"))

switch(valor){

    case "norte":
    valor = 10
    break;

    case "centro":
    valor = 20
    break;
    
    case "sur":
    valor = 30
    break;
    
    default:alert("no llegamos a ese territorio")

}
envio = (valor * 0.2)
}

ingreso()
function ingreso(){
    
let costo = (prompt("ingrese el pais al que pertenece:\nuruguay\nchile\ncolombia"))

switch(costo){

    case "uruguay":
        costo = 10
        break;

    case "chile" :
        costo = 15
        break;
        
    case "colombia":
        costo = 9
        break;
        
    default:alert("pais invalido")    

}
aduana =(costo * 0.2)
}


alert(`DETALLES DE TU COMPRA\niva: ${iva}USD\nEnvio: ${envio}USD\nImpuesto de Aduanas: ${aduana}USD`)