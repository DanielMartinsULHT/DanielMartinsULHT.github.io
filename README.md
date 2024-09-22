# Desenvolvimento de Interfaces Web

## Feedback Lab 1

Olá! Excelente trabalho.

1. Podemos criar um novo ficheiro de css para cada ficheiro de HTML. Não é obrigatório, mas pode ser feito. 

```html
<link rel="stylesheet" href="../styles.css">
```

## Feedback Lab 2

1. No index.html deves adicionar um parágrafo que descreva a tua cidade podes utilizar o chatGPT para gerar esse texto.

```html
<p>A minha cidade é muito linda!!!</p>
```


2. A tabela está com pouca informaçao A Tabela deverá ter pelo menos 3 colunas e 4 linhas. 

3. No multimedia.html podemos utilizar o elemento section para melhorar o nosso HTML

```html
<h3>Fotografias</h3>
<a href="images/sintra-1_grande.jpg" target="_blank"><img src="images/sintra-1_pequena.jpg" alt="Quinta da Regaleira"></a>
<a href="images/sintra-2_grande.jpg" target="_blank"><img src="images/sintra-2_pequena.jpg" alt="Castelo dos Mouros"></a>
<a href="images/sintra-3_grande.jpg" target="_blank"><img src="images/sintra-3_pequena.jpg" alt="Vila de Sintra"></a>

<h3>Vídeo</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/jWVvdQO_dZY?si=Nr9o4WNQPRmjbVB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
</iframe>
```

```html
<section> 
    <h3>Fotografias</h3>
    <a href="images/sintra-1_grande.jpg" target="_blank"><img src="images/sintra-1_pequena.jpg" alt="Quinta da Regaleira"></a>
    <a href="images/sintra-2_grande.jpg" target="_blank"><img src="images/sintra-2_pequena.jpg" alt="Castelo dos Mouros"></a>
    <a href="images/sintra-3_grande.jpg" target="_blank"><img src="images/sintra-3_pequena.jpg" alt="Vila de Sintra"></a>
</section>

<section> 
    <h3>Vídeo</h3>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jWVvdQO_dZY?si=Nr9o4WNQPRmjbVB0" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
    </iframe>
</section>
```

4. multimedia.html falta a navegação entre os vários elementos h3, que devem contar um id

Instruções:

Defina o atributo id em cada um dos elementos h3 criados, devem ser 3. Por baixo do elemento h2 Multimédia crie links "âncora" para cada um dos elementos h3 (fotografia, vídeo e poema).

