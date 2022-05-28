// mediana general
const salarioCol = colombia.map(
    function (personita) {
        return personita.salario;
    }
);

const salarioColSorted = salarioCol.sort( //permite ordenar un array
    function (a, b){
        return a - b;
    }
);

function esPar(numerito) {
   return (numerito % 2 === 0) // calcula si el resultado es = 0, si es igual a 0, el numero es par
}

function calcularPromedio (lista) { //calculo del promedio de los salarios
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2); //quita la parte decimal del resultado de la division y deja el entero
    if (esPar(lista.length)){ 
        const peronaMitad1 = lista[mitad - 1];
        const peronaMitad2 = lista[mitad];
        const mediana = calcularPromedio([peronaMitad1, peronaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//mediana top 10
//metodo .splice() recibe dos parametros los cuales seran los valores del  1er elemento hasta que elemeto seran sacados del array ejem: [1, 2, 3, 5, 1, 5]
//[1, 2, ||3, 5, 1||, 5] del 3 hasta el 5 son los valores que se sacaran del array

const medianaGeneral = medianaSalarios(salarioColSorted);

const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart;

const salariosTop10 = salarioColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10 = medianaSalarios(salariosTop10);

// resultado de los salarios con la mediana
console.log({
    medianaGeneral,
    medianaTop10,
});