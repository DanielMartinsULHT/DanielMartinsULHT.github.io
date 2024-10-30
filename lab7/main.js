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
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

red.addEventListener("click", changeItemTwo, false);
green.addEventListener("click", changeItemTwo, false);
blue.addEventListener("click", changeItemTwo, false);

function changeItemTwo(){
    switch (this.value) {
        case "Red":
            number2.style.color = "red"
            break;
        case "Blue":
            number2.style.color = "blue"
            break;
        case "Green":
            number2.style.color = "green"
            break;
        default:
            break;
    }
}


//Item 3

const number3 = document.getElementById("trocaCor");
number3.addEventListener("input", changeItemThree, false);

function changeItemThree() {
    let valores = this.number3.length()
    console.log(valores)
}
