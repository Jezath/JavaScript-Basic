const precioOriginal = 120;
const descuento = 18;

function calcularPrecioCondescuento (precio, descuento) {
    const porcentajePrecioCondescuento = 100 - descuento;
    const precioCondescuento = (precio * porcentajePrecioCondescuento) / 100;
    return precioCondescuento;
}

function onClickButtonPriceDiscount() {
    const intputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const diconuntValue = inputDiscount.value;

    const precioCondescuento = calcularPrecioCondescuento(priceValue, diconuntValue);

    const resultPrice = document.getElementById("resultPrice");
    //obtenemos el id del <p> vacio para poder pasarle un texto
    resultPrice.innerText = "El precio con descuento es: $" + precioCondescuento;
    //al id de p le agregamos el .innerText el cual permite insertar texto en una etiqueta html
}



/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioCondescuento,
    precioCondescuento
});*/