function escolhaOponente(){
    const jokenpo = ["pedra", "papel", "tesoura"]
    let numeroAleatorio = Math.floor(Math.random() * jokenpo.length)

    return jokenpo[numeroAleatorio]

}

function escolhaJogador(botaoClicado) {
    console.log(botaoClicado)
}

function jogar(escolhaUsuario){
    const jogadaPC = escolhaOponente()
    const escolhaUsuario = escolhaJogador(escolhaUser)

    const.log(`Escolha do PC: ${jogadaPC}`)
    const.log(`Escolha do Usuário: ${escolhaUsuario}`)

    if(jogadaPC === escolhaUsuario) {
        alert("Empate!")
    }
    else if (
        (jogadaPC === "Pedra" && escolhaUsuario === "Papel")
        (jogadaPC === "Papel" && escolhaUsuario === "Tesoura")
        (jogadaPC == "Tesoura" && escolhaUsuario === "Pedra")
    ){
        alert(Parabéns, voce ganhou!)
    }
    else {

    }
}

escolhaJogador()