const buttons = document.querySelectorAll('.btn');
let nums = [];
let operator;

function display(btn) {
    let display = document.querySelector('.container_display');
    display.innerText += btn;
}


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
    nums = [];
    operator;
}

function deleteOne() {
    let displays = document.querySelector('.container_display').innerText;
    let num = displays.slice(0, -1);
    reset();
    display(num);
}

function checkSymbol(value) {
    let symbolBtn = value;

    switch (symbolBtn) {
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
            capture(symbolBtn)
            break;
    }
}

function capture(op) {
    operator = op;
    if (nums.length === 2) return;
    nums.push(Number(document.querySelector('.container_display').innerText));

    // Apagando o display ao precionar os simbolos
    const display = document.querySelector('.container_display');
    display.innerText = '';

    setUpOperation();
}

function setUpOperation() {

    let numUm = nums[0];
    let numDois = nums[1];
    let total = 0;

    if (operator === '+') {
        total = numUm + numDois;
    }

    if (operator === '-') {
        total = numUm - numDois;
    }

    if (operator === '/') {
        total = numUm / numDois;
    }

    if (operator === 'x') {
        total = numUm * numDois;
    }

    // exibe no display o total do calculo.
    if (total) display(total)
}
