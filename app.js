let numerosSorteados = [];
let numeroMax = 100;
let numeroSecreto = gerarNumeroAleatorio(numeroMax);
let tentativas = 1;

//Função com parametros, espera receber informação quando chamada, e trabalha com essa informação 
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

mensagemInicial();

function mensagemInicial(){
exibirTexto("h1", "Número Secreto");
exibirTexto("p", `Escolha um número entre 1 a ${numeroMax}`);
}

function gerarNumeroAleatorio(numeroMax) {
    //Gera um numero aleatorio e RETORNA o numero gerado. Sempre que a função vai retornar um valor, o return deve estar presente
    let numeroEscolhido = parseInt(Math.random() * numeroMax + 1);
    let quantidadeSorteada = numerosSorteados.length;

    if(quantidadeSorteada == numeroMax){
        numerosSorteados = [];
    }

    if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(numeroMax);
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute() {
    //Var chute puxa informação do html, mais especificamente o value do input
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        exibirTexto("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o número com ${tentativas} ${palavraTentativa} :D`;
        exibirTexto("p", `${mensagemTentativa}`);

        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {       
        if(chute < numeroSecreto){
            exibirTexto("h1", "Errou! Tente novamente");
            exibirTexto("p", "O número secreto é maior...");
        } else {
            exibirTexto("h1", "Errou! Tente novamente");
            exibirTexto("p", "O número secreto é menor...");
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio(numeroMax);
    limparCampo();
    mensagemInicial();
    tentativas = 1;

    document.getElementById("reiniciar").setAttribute("disabled", true);
}




