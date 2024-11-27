//console.log(produtos)

const sectionProduto = document.getElementById('lista-produtos')
const sectionProdutoSelecionados = document.getElementById('lista-produtos-selecionados')

let lista = []

let produtosSelecionados = []



produtos.forEach(produto => {
    let article = document.createElement("article")
    //console.log(produto)
    article.innerHTML = `<h3>${produto.title}</h3>
                            <p>${produto.description}</p>
                            <p>Preço = ${produto.price}</p>
                            <img src="${produto.image}">
                            <input type="button" value="+ adicionar ao cesto" id="${produto.id}">`
    sectionProduto.append(article)


    //selecionar
    document.getElementById(produto.id).addEventListener('click', (e) => {
        console.log(e.target.id)
        //adicionar ao LocalStorage
        localStorage.setItem(JSON.stringify(produto.id), JSON.stringify(produto.title))

        //adicionar ao lo
        sectionProdutoSelecionados.append(article)
        sectionProduto.removeChild(article)
        

    })

})

function displayProduto(e) {
    console.log(e)
}






