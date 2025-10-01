window.onload = function() {
    function obtenerElementoAleatorio(arr) {
        const indiceAleatorio = Math.floor(Math.random() * arr.length);
        return arr[indiceAleatorio];
    }

    const sujetos = [
        "Un mapache",
        "Mi perro",
        "El fantasma de mi abuela",
        "Un político",
        "El repartidor de Amazon",
        "Un alce con sombrero"
    ];

    const verbos = [
        "se comió",
        "destruyó",
        "escondió",
        "le gritó a",
        "bailó sobre",
        "robó"
    ];

    const objetos = [
        "mis deberes",
        "el coche",
        "mi proyecto final",
        "las llaves de casa",
        "la tarta de cumpleaños"
    ];
    
    const lugares = [
        "en mi garaje.",
        "delante de mi jefe.",
        "en el parque.",
        "mientras yo dormía.",
        "en la cocina."
    ];

    const sujetoAleatorio = obtenerElementoAleatorio(sujetos);
    const verboAleatorio = obtenerElementoAleatorio(verbos);
    const objetoAleatorio = obtenerElementoAleatorio(objetos);
    const lugarAleatorio = obtenerElementoAleatorio(lugares);
    
    const excusaCompleta = `${sujetoAleatorio} ${verboAleatorio} ${objetoAleatorio} ${lugarAleatorio}`;

    document.getElementById('excusa').innerHTML = excusaCompleta;
};
