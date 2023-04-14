const calculos = function(
    //multiplicando
    minimoMultiplicando,
    maximoMultiplicando,

    //multiplicadores
    multiplicadorMinimo,
    multiplicadorMaximo
) {
    //quais são ou estão multiplicando
    let miniMultiplicando = minimoMultiplicando
    let maxMultiplicando = maximoMultiplicando

    //quais são os multiplicandores
    let multiplicadorMini = multiplicadorMinimo
    let multiplicadorMax = multiplicadorMaximo

    let contador

    while (miniMultiplicando <= maxMultiplicando) {
        console.log('\n--------------------------------\n');
        contador = multiplicadorMini
        while (contador <= multiplicadorMax) {
            let resultado = miniMultiplicando * contador
            console.log(`${miniMultiplicando} x ${contador} = ${resultado}`);
            contador++
        }
        miniMultiplicando++
    }
}

module.exports = {
    calculos
}