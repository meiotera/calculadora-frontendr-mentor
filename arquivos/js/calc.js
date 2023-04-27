function display(btn) {
    let display = document.querySelector('.container_display');
    display.innerText += btn;
}

const buttons = document.querySelectorAll('.btn');

// Percorrendo os btns para executar a acao de mostrar na tela o valor
buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const valueBtn = this.value;

        if(isNaN(valueBtn)) {
            console.log('Nao pode ser number' + valueBtn)
            return
        }

        display(valueBtn)
    });
});




