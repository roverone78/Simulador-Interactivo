//Colocando variables globales!
let articulo = "";
let precio = 0;
let cantidad = 0;
let subTotal=0;
let precioTotal = 0;
let totalNeto =0;
let seguirComprando = false;
const IVA = 0.21;

//lista de articulos e ingreso de la cantidad de cada uno de estos.
do  {
        articulo = prompt("¿Cual artículo deseas comprar?\n Mochila\n Navaja \n Reloj \n Botas \n Campera \n Linterna").toUpperCase();
        cantidad = Number(prompt("¿Cuantos deseas llevar?"));
        //Se anexa los precios de cada articulo.
        switch  (articulo)      {
                case    "MOCHILA" :
                        precio = 16400;
                        break;
                case    "NAVAJA" :
                        precio = 12000;
                        break;
                case    "RELOJ" :
                        precio = 15000;
                        break;
                case    "BOTAS" :
                        precio = 25000;
                        break;
                case    "CAMPERA" :
                        precio = 10000;
                        break;
                case    "LINTERNA" :
                        precio = 6200;
                        break;  
                default:
                        alert("Error al ingresar los datos");
                        precio = 0;
                        cantidad = 0;
                        break;  
        } 
        subTotal +=precio * cantidad; 
        precioTotal = IVA*subTotal;
        totalNeto =subTotal+precioTotal;
        seguirComprando = confirm("¿Queres comprar más?");

} while (seguirComprando);

alert ("El valor total de su compra con IVA es: "+totalNeto);


//Ingreso del total neto para empezar la funcion de calculo de cuotas.
function monto1(){
    let monto1 = totalNeto;
    return monto1
    }
    
//Cuotas a pagar
function cuotas1(){
    let cuotas1 = Number(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
    return cuotas1
    }
//creando las variables para la division monto entre cuotas
let monto = monto1()
let cuotas = cuotas1()
    
    
//Funcion para dividir cantidad en cuotas
function dividir(dato1, dato2){
    let resultado = dato1 / dato2;
    return resultado
}
    
//Varible para la division del monto en cuotas
let division = dividir(monto, cuotas)
    
//Mostrar resultado
alert("Usted debe pagar " + cuotas + " cuotas de " + division)