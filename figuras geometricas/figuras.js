//código del cuadrado
console.group("cuadrado");

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//código del triangulo
console.group("Triangulo");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura)/2;
}

console.groupEnd();

//código del criculo
console.group("Circulo");

function diametroCirculo(radio){
    return radio *2;
}

//pi
const pi = Math.PI; //math.pi nos da el valor de pi
console.log("Pi es: " + pi + "cm");

//circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio); //llamamos una funcion dentro de una funcion
    return diametro * pi;
}

//area
function areaCirculo(radio) {
    return (radio * radio) * pi;
}
console.groupEnd();


//aqui interectuamos con html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value; //.value permite obtener el valor que contiene el input

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value; //.value permite obtener el valor que contiene el input

    const area = areaCuadrado(value);
    alert(area);
}