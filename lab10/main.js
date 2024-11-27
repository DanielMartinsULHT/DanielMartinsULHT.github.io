//console.log(produtos)

const sectionProduto = document.getElementById('lista-produtos')
const sectionProdutoSelecionados = document.getElementById('lista-produtos-selecionados')

let lista = []

let produtosSelecionados = []

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
                let article = document.createElement("article");
                article.innerHTML = `
                    <h3>${produto.title}</h3>
                    <p>${produto.description}</p>
                    <p>Preço = ${produto.price}</p>
                    <img src="${produto.image}" alt="${produto.title}">
                    <input type="button" value="+ adicionar ao cesto" id="${produto.id}">
                `;
                sectionProduto.append(article);


                document.getElementById(produto.id).addEventListener('click', (e) => {
                    console.log(e.target.id);

                    localStorage.setItem(JSON.stringify(produto.id), JSON.stringify(produto.title));


                    sectionProdutoSelecionados.append(article);
                    sectionProduto.removeChild(article);
                });
            });
        })
        .catch(error => console.error('Error: ', error));
}


document.addEventListener('DOMContentLoaded', () => {
    criarProduto();
});



function displayProduto(e) {
    console.log(e)
}






