const lista1 = [100, 700, 500, 4000];
lista1.sort((a,b)=>{return a-b}) // el metodo .sort nos permite ordenar los elementos del array
const mitadLista1 = parseInt(lista1.length / 2); //la funcion parseInt convirte los decimales a enteros, o los string a numeros
//la lista1 al dividirla / 2 puede ser par o impar por lo que tendriamos que validar eso y trabajar segun el resultado par o impar

function esPar(numerito){
    if (numerito % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function calcularPromedio (lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

let mediana;

if (esPar(lista1.length)){
    const element1 = lista1[mitadLista1 - 1];
    const element2 = lista1[mitadLista1];

    const element1y2 = calcularPromedio([element1, element2]);

    mediana = element1y2;
}
else {
    mediana = lista1[mitadLista1];
}