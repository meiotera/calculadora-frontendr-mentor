function display(btn) {
    let display = document.querySelector('.container_display');
    display.innerText += btn;    
}

const buttons = document.querySelectorAll('.btn');

// Percorrendo os btns para executar a acao de mostrar na tela o valor
buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const valueBtn = this.value;

        if (isNaN(valueBtn)) {
            checkSymbol(valueBtn)
            return;
        }
        display(valueBtn);
    });
});

function reset() {
    const display = document.querySelector('.container_display');
    display.innerText = '';
}

function deleteOne() {
    let displays = document.querySelector('.container_display').innerText;
    let num = displays.slice(0, -1);
    reset();
    display(num);    
}

function checkSymbol(sym) {
    let op = sym;

    switch (op) {
        case 'reset':
            reset();
            break;
        case 'del':
            deleteOne();
            break;
        case '+':
        case '-':
        case 'x':
        case '/':
            calcula(op)
            break;
    }    
}

let numUm;
let numDois;
const nums = [];

function calcula(op) {
    const operator = op;

    if(numUm) {
        
        numDois = Number(document.querySelector('.container_display').innerText)
    } else {
        numUm = Number(document.querySelector('.container_display').innerText)
    }
}

