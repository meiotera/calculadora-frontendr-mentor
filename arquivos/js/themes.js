(function () {
    theme()

    function theme() {
        let btnTheme = document.getElementById('myRange').value;
        
        // elementos HTML
        let container_display = document.querySelector('.container_display');
        let container_numbers = document.querySelector('.container_numbers');
        let btns = document.querySelectorAll('.btn');
        let reset = document.querySelector('.reset');
        let del = document.querySelector('.del');
        let eq = document.querySelector('.eq');
        let container_themes = document.querySelector('.container_themes')        
        
    
        switch(btnTheme) {
            case '1':
                document.body.id = 'body-t1';                
                container_display.id = 'container_display-t1';
                container_numbers.id = 'container_numbers-t1';
                container_themes.id = 'container_themes-t1';
                
                reset.id = 'reset-t1';
                del.id = 'reset-t1';
                eq.id = 'eq-t1';
             
    
                break;
    
            case '2':
                document.body.id = 'body-t2';                
                container_display.id = 'container_display-t2';
                container_numbers.id = 'container_numbers-t2';
                container_themes.id = 'container_themes-t2';


                reset.id = 'reset-t2';
                del.id = 'reset-t2';
                eq.id = 'eq-t2';
                break;
    
                break;

            case '3':
                document.body.id = 'body-t3'
                
        }
    }

    const myRange = document.getElementById('myRange');
    myRange.addEventListener('change', theme)
})()