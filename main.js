//Colocando variables globales!
let articulo = "";
let precio = 0;
let cantidad = 0;
let subTotal=0;
let precioTotal = 0;
let totalNeto =0;
let seguirComprando = false;
const IVA = 0.21;

do  {
        articulo = prompt("¿Cual artículo deseas comprar?\n Mochila\n Navaja \n Reloj \n Botas \n Campera \n Linterna").toUpperCase();
        cantidad = Number(prompt("¿Cuantos deseas llevar?"));

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