// Lista de amigos
var listaAmigos = []

// -- Adicionar --

// Adicionar amigo
function adicionarAmigo(){
    const amigo = document.getElementById("amigo");
    const listaResultado = document.querySelector(".result-list")
    
    if (amigo.value.length < 1){
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Se já houver sorteado um nome anteriormente limpa o mesmo
    if (listaResultado.firstChild){
        listaResultado.replaceChildren();
    }

    listaAmigos.push(amigo.value);
    
    exibirNomeAmigoLista();

    // Limpa o input
    amigo.value = "";

}

// Adicionar nome do amigo na lista
function exibirNomeAmigoLista(){
    var ul = document.querySelector(".name-list");
    var li = document.createElement("li");
    
    li.appendChild(document.createTextNode(listaAmigos[listaAmigos.length - 1]));
    ul.appendChild(li);

}


// -- Sortear --

// Gera o índice aleatório - [0, tamanhoVetor) de zero até o intervalo aberto do tamanho do vetor (tamanhoVetor - 1)
function gerarIndiceAleatorio(tamanhoVetor) {
    return Math.floor(Math.random() * tamanhoVetor);
}

// Sortear amigo
function sortearAmigo() {

    // Sorteia apenas se houver algum amigo na lista
    if (listaAmigos.length >= 1){
        const indiceSorteado = gerarIndiceAleatorio(listaAmigos.length);

        exibirNomeSorteado(listaAmigos[indiceSorteado]);

        return;
    }

    // Se não houver nenhum nome da lista
    alert("Não há nomes a serem sorteados. Por favor, insira um nome válido.");
}

function exibirNomeSorteado(nomeSorteado){
    const ulRemover = document.querySelector(".name-list");
    const ulSorteado = document.querySelector(".result-list");

    ulRemover.replaceChildren();    // Remove todos os elementos da lista no html
    listaAmigos = [];               // Remove os nomes da lista

    var liSorteado = document.createElement("li");
    liSorteado.appendChild(document.createTextNode(nomeSorteado));
    ulSorteado.appendChild(liSorteado);      // Exibe o nome sorteado 

}