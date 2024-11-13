console.log(produtos)

const sectionProduto = document.getElementById('lista-produtos')


produtos.forEach(produto => {
    let article = document.createElement("article")
    console.log(produto)
    article.innerHTML = `<h3>${produto.title}</h3>
                            <p>${produto.description}</p>
                            <img src="${produto.image}">
                            <input type="button" value="+ adicionar ao cesto">`
    sectionProduto.append(article)

})
document.addEventListener('click', (e) => {
    console.log(e)
})



