let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
// variavel tentativa guarda qnts vezes o player tentou -
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2} );
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100'); 
}

exibirMensagemInicial()

function verificarChute() {
    //variavel chute guarda o valor registrado pelo usuário
    let chute = document.querySelector('input').value;
    //se acertou exibe muda o texto da tela por acertou e voce descob....
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        //verifica se o sing ou plural
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
        // variavel tentativa guarda qnts vezes o player tentou - 
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
       //encontra o botação reiciciar no HTML e abilita o botao no jogo
        document.getElementById('reiniciar').removeAttribute('disabled');
            
        exibirTextoNaTela('p', mensagemTentativas);
    } else {

            if ( chute > numeroSecreto){

                exibirTextoNaTela('p','O número secreto é menor que o chute');
            } else {

                exibirTextoNaTela('p','O número secreto é maior que o chute');
            }
            // vai somando mais 1 a cada tentativa
            tentativas++;
            limparCampo();
    }
    
}

function gerarNumeroAleatorio() {
    //variavel que armazena o numero aleatorio
    let numerEscolhido = parseInt(Math.random() * numeroLimite + 1);
    // o includes verifica se há elementos (numerEscolhido) na lista listaDeNumerosSorteados[]
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){

        listaDeNumerosSorteados = [];

    }
    if (listaDeNumerosSorteados.includes(numerEscolhido)) {
        // Se o número já foi sorteado, ele aciona a propria função gerarNumeroAleatorio(), gerando um novo numero 
        // aletorio e verifica se o nr foi escolhido.
        return gerarNumeroAleatorio();

        //else se o elemento nao esta na lista, usamos o return para retornar o numerEscolhido(gerar nur aleatorio)
        //usa o metodo push para salvar o (numerEscolhido) na lista listaDeNumerosSorteados 
        // o push têm que ser declarado antes do return        
    } else {
        listaDeNumerosSorteados.push(numerEscolhido);
        console.log(listaDeNumerosSorteados)
        return numerEscolhido;
    }
}

function limparCampo() {
    // 
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}










