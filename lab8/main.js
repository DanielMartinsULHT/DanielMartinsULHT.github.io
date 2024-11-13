// Item 1
const number1 = document.getElementById("passaAqui");
number1.addEventListener("mouseover", changeItemOne, false);
number1.addEventListener("mouseleave", changeBackItemOne, false);

function changeItemOne(){
    number1.textContent = "Obrigado por passares!";
}

function changeBackItemOne(){
    number1.textContent = "Passa por aqui!";
}

//item 2

const number2 = document.getElementById("pintaMe");

document.querySelectorAll("#color").forEach((e) => {
    let a = e.addEventListener('click', changeItemTwo, false)
    
    function changeItemTwo() {
        switch (this.dataset.color) {
            case "red":
                number2.style.color = "red"
                break;
            case "blue":
                number2.style.color = "blue"
                break;
            case "green":
                number2.style.color = "green"
                break;
            default:
                break;
        }
    }
});





//Item 3

const number3 = document.getElementById("trocaCor");

number3.addEventListener('input', (e) => {
    
});

//Item 4
document.querySelector('#color-english').onchange = function() {
    document.querySelector('body').style.backgroundColor = this.value;
}

//Item 5
if(!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

// function count() {
//     let counter = localStorage.getItem('counter')
//     counter++
//     document.querySelector('span').textContent = counter
//     localStorage.setItem('counter', counter)
//     console.log(counter)
// }
document.querySelector('#conta').onclick = () => {
    let counter = localStorage.getItem('counter')
    counter++
    document.querySelector('span').textContent = counter
    localStorage.setItem('counter', counter)
    console.log(counter)
}


document.querySelector('span').textContent = localStorage.getItem('counter')
//Item 6
document.querySelector('form').onsubmit = (e) => {
    // do not reload the page
    e.preventDefault()
    // code here:


    
};

//7
function count() {
    // code here
}
setInterval(count, 1000);
