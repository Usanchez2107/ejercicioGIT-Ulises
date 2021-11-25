/* Ejercicio Comodin */

function combinarpalabras(palabra){




    for (let i = 0; i < palabras.length; i++) {
        console.log(palabras[i])
    }



    for (let i = 0; i < palabras.length; i++) {
        for (let j = 1; j < palabras.length; j++) {
            console.log(palabras[i]+palabras[j]);
        }
    }
    for (let i = 0; i < palabras.length; i++) {
        for (let j = 1; j < palabras.length; j++) {
            for (let k = 1; k < palabras.length; k++) {
                console.log(palabras[i] + palabras[j] + palabras[k]);
            }
        }
    }
}