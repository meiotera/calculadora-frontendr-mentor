function changeTheme() {
    const btn_theme = document.getElementById('myRange').value;

    console.log(btn_theme)

    if (btn_theme === '2') {
        document.body.classList.add('body_them-two');
    }

}
let teste = document.getElementById('myRange');
teste.addEventListener('change', changeTheme)