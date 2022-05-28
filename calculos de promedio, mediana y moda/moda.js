const lista1 = [1, 2, 3, 1, 2, 4, 5, 6, 1];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } 
        else{
            lista1Count[elemento] = 1;
        }
        
    }
);

// Object.entries permite traer un objeto a una variable que al final será array
const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];