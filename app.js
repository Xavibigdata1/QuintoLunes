/*const showMessage = ( message ) => { 
  return message
}
console.log( showMessage( 'Hola cabeza de bola' ) )*/
function busquedaLineal(arr, elemento) {
 for (let i = 0; i < arr.length; i++) {
 if (arr[i] === elemento) {
 return i; // Retorna el índice del elemento encontrado
  }
 }
return -1; // Retorna -1 si el elemento no se encuentra en el arreglo
}
const arreglo = [10, 5, 3, 8, 2, 6];
const elementoBuscado = 8;
const indice = busquedaLineal(arreglo, elementoBuscado);
console.log(`El elemento ${elementoBuscado} se encuentra en el
índice ${indice}.`);
console.log( "este programa se esta probando por segunda vez" );
console.log("este es la tercera prueba");

