// Simulação de adição de itens de pedido
// Seleciona todos os botoes de adicionar
const botoesAdicionar = document.querySelectorAll(".adicionar");

// Percorre os botoes de adicionar
const listaPedido = document.getElementById("lista-pedido");

//Seleciona o elemento total
const totalElemento = document.getElementById("total");

// Cria variável que armazena o total do pedido
let total = 0;

// Percorre todos os botoes de adicionar
botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    //Obtem o elemento pai do botao
    const produto = botao.parentElement;

    //Obtem o nome do produto a partir do texto da tag <h3>
    const nome = produto.querySelector("h3").textContent;

    //Obtem o preco do produto a partir do texto da tag <span>
    const preco = parseFloat(
      produto.querySelector(".preco").textContent.replace("R$", "")
    );

    // Cria um novo item de pedido
    const itemPedido = document.createElement("li");
    itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

    listaPedido.appendChild(itemPedido);
    //Atualiza o total da compra
    total += preco;
    totalElemento.textContent = `R$ ${total.toFixed(2)}`;
  });
});

//Simula finalização do pedido

const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

botaoFinalizarPedido.addEventListener("click", () => {
  alert("Pedido finalizado com sucesso! " + totalElemento.textContent);

  listaPedido.innerHTML = "";
  total = 0;

  totalElemento.textContent = `R$ ${total.toFixed(2)}`;
});
