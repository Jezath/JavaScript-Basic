
function calcularPromedio (lista) {
    //1er forma
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) //.length es el valor de la longitud del array
    // {
    //     sumaLista = sumaLista + lista[i];
    // }

    //2da forma
    const sumaLista = lista.reduce( //el metodo .reduce() permite hacer operaciones con los valores anteriores del mismo array
        function(valorAcumulado = 0, nuevoElemento) { // el primer valor lo iniciamos con 0
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}