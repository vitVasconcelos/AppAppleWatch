const imagemVisualizacao = document.querySelector('#visualizacao img');
const tituloProduto = document.querySelector("h1");
const opcoesTamanho = ['41 mm', '45 mm'];
nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemMiniatura0 = document.querySelector('[for = "0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for = "1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for = "2-imagem"] img');
const opcoesCores = ["Verde-cipreste","Azul-inverno", "Meia-noite","Estelar", "Rosa-claro"];

let numImagemSelecionada =1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;


function atualizarImagemSelecionada(){
    const opcaoImagemSelecionada = document.querySelector('[name = "opcao-imagem"]:checked').id.charAt(0);

    numImagemSelecionada = opcaoImagemSelecionada;

    imagemVisualizacao.src = "./src/imagens/imagens-" + opcoesCores[numCorSelecionada] +"/imagem-" +numImagemSelecionada + ".jpeg";
}
function atualizarTamanho(){
    const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);

    numTamanhoSelecionado = opcaoTamanhoSelecionado;

    const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];

    tituloProduto.textContent = "Pulseira loop esportiva azul-inverno para caixa de " + tamanhoCaixa;

    if(tamanhoCaixa === '41 mm'){
        imagemVisualizacao.classList.add("caixa-pequena");
    }else{
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}
function atualizarCorSeleciona(){
    const opcaoCorSelecionada = document.querySelector('[name = "opcao-cor"]:checked').id.charAt(0);
    numCorSelecionada = opcaoCorSelecionada;
    const nomeCor = opcoesCores[numCorSelecionada];

    tituloProduto.textContent = "Pulseira loop esportiva " + nomeCor.toLowerCase() + " para caixa de " + opcoesTamanho[numTamanhoSelecionado];

    nomeCorSelecionada.textContent = "Cor - " + nomeCor;

    imagemVisualizacao.src = "./src/imagens/imagens-" + nomeCor.toLowerCase() + "/imagem-" +numImagemSelecionada + ".jpeg";
    imagemMiniatura0.src = "./src/imagens/imagens-" + nomeCor.toLowerCase() + "/imagem-0" + ".jpeg";
    imagemMiniatura1.src = "./src/imagens/imagens-" + nomeCor.toLowerCase() + "/imagem-1" + ".jpeg";
    imagemMiniatura2.src = "./src/imagens/imagens-" + nomeCor.toLowerCase() + "/imagem-2" + ".jpeg";
}