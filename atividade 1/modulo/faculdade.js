function media(nota1, nota2, nota3, nota4) {

    let primeiraNota = Number(nota1)
    let segundaNota = Number(nota2)
    let terceiraNota = Number(nota3)
    let quartaNota = Number(nota4)

    let media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4


    return media;




}

function mediaExame(notaDoExame, mediaDoAluno) {

    let media = Number(mediaDoAluno);
    let exame = Number(notaDoExame);



    let exameMedia = (notaDoExame + mediaDoAluno) / 2

    return exameMedia;

}

function statusAluno(resultado, genero) {

    let notaFinal = resultado
    let generO = genero

    if (notaFinal >= 60) {
        if (generO == 'Masculino') {
            return 'APROVADO'
        } else {
            return 'APROVADA'
        }
    } else {
        if (generO == Masculino) {
            return 'REPROVADO'
        } else {
            return 'REPROVADA'
        }

    }
}

function validarStatuSemExame(resultado, genero) {

    let notaFinal = resultado
    let generO = genero

    if (notaFinal >= 70) {
        if (generO == 'Masculino') {
            return 'APROVADO'
        } else {
            return 'APROVADA'
        }
    } else if (resultado < 50) {
        if (generO == Masculino) {
            return 'REPROVADO'
        } else {
            return 'REPROVADA'
        }

    }
}

module.exports = {
    media,
    mediaExame,
    statusAluno,
    validarStatuSemExame
}