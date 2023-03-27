function changeTheme() {
    const btn_theme = document.getElementById('myRange').value;
    let display = document.querySelector('.container_display');  
    let container_numbers = document.querySelector('.container_numbers');
    let reset = document.querySelector('.reset');
    let del = document.querySelector('.del');    

    if (btn_theme === '2') {
        document.body.classList.add('body-2');        
        display.classList.add('container-display-2')
        container_numbers.classList.add('container_numbers-2');
        reset.classList.add('reset-2')
        del.classList.add('del-2')
    }

}
let teste = document.getElementById('myRange');
teste.addEventListener('change', changeTheme)