// OBJETIVO - quando clicar no botão alterar a imagem de fundo correspondente

// passo 1 - pegar o elemento html dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const logos = document.querySelector('.logos');

// passo 2 - dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //passo 3 -  desmarcar o botao selecionado anterior
        desativarBotaoSelecionado();

        //passo 4 - marcar o botao clicado como se estivesse selecionado 
        botao.classList.add('selecionado');

        //passo 5 - esconder a imagem de fundo anterior
        esconderImagemAtiva();

        

        //passo 6 - fazer aparecer imagem correspondente ao botao clicado
        imagens[indice].classList.add('ativa');
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}


