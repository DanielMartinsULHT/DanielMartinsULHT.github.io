const sectionProduto = document.getElementById('lista-produtos');
const sectionProdutoSelecionados = document.getElementById('lista-produtos-selecionados');
const precoTotalElement = document.getElementById('preco-total');

let precoTotal = 0; // Inicializa o total como 0

// Função para criar a lista de produtos
function criarProduto() {
    fetch('https://deisishop.pythonanywhere.com/products/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar os produtos');
            }
            return response.json();
        })
        .then(produtos => {
            produtos.forEach(produto => {
                // Adiciona o produto na lista principal apenas se não estiver no carrinho
                if (!estaNoCarrinho(produto.id)) {
                    adicionarProdutoNaLista(produto);
                }
            });
        })
        .catch(error => console.error('Error: ', error));
}

// Função para adicionar um produto na lista principal
function adicionarProdutoNaLista(produto) {
    const article = document.createElement("article");
    article.id = `produto-${produto.id}`;
    article.className = `produtos`
    article.innerHTML = `
        <h3>${produto.title}</h3>
        <p>${produto.description}</p>
        <p>Preço: ${produto.price}</p>
        <img src="${produto.image}" alt="${produto.title}">
        <input type="button" value="+ adicionar ao cesto" id="add-${produto.id}">
    `;
    sectionProduto.append(article);

    // Adiciona evento ao botão para mover ao cesto
    document.getElementById(`add-${produto.id}`).addEventListener('click', () => {
        adicionarAoCesto(produto, article);
    });
}

// Função para adicionar um produto ao cesto
function adicionarAoCesto(produto, articleOriginal) {
    // Remove o produto da lista principal
    sectionProduto.removeChild(articleOriginal);

    // Atualiza o localStorage
    salvarNoCarrinho(produto);

    // Atualiza o preço total
    atualizarPrecoTotal(produto.price);

    // Adiciona o produto no cesto
    adicionarProdutoNoCesto(produto);
}

// Função para adicionar um produto ao cesto visualmente
function adicionarProdutoNoCesto(produto) {
    const article = document.createElement("article");
    article.id = `cesto-${produto.id}`;
    article.className = `produtos`
    article.innerHTML = `
        <h3>${produto.title}</h3>
        <p>${produto.description}</p>
        <p>Preço: ${produto.price}</p>
        <img src="${produto.image}" alt="${produto.title}">
        <input type="button" value="- remover do cesto" id="remove-${produto.id}">
    `;
    sectionProdutoSelecionados.append(article);

    // Adiciona evento ao botão para remover do cesto
    document.getElementById(`remove-${produto.id}`).addEventListener('click', () => {
        removerDoCesto(produto, article);
    });
}

// Função para remover um produto do cesto
function removerDoCesto(produto, articleCesto) {
    // Remove o produto do cesto visualmente
    sectionProdutoSelecionados.removeChild(articleCesto);

    // Atualiza o localStorage
    removerDoCarrinho(produto.id);

    // Atualiza o preço total
    atualizarPrecoTotal(-produto.price);

    // Recria o produto na lista principal
    adicionarProdutoNaLista(produto);
}

// Função para atualizar o preço total
function atualizarPrecoTotal(valor) {
    precoTotal += valor;
    precoTotalElement.textContent = precoTotal.toFixed(2);
}

// Função para salvar um produto no carrinho (localStorage)
function salvarNoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para remover um produto do carrinho (localStorage)
function removerDoCarrinho(produtoId) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(produto => produto.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para verificar se um produto já está no carrinho
function estaNoCarrinho(produtoId) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    return carrinho.some(produto => produto.id === produtoId);
}

// Função para restaurar os produtos do carrinho ao carregar a página
function restaurarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.forEach(produto => {
        adicionarProdutoNoCesto(produto);
        atualizarPrecoTotal(produto.price); // Calcula o total ao restaurar
    });
}

// Executa ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    criarProduto();
    restaurarCarrinho(); // Restaura o carrinho ao carregar a página
});
