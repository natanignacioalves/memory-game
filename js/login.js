const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => { //desestruturaçao de objts
    if (target.value.length > 2 ) {
        button.removeAttribute('disabled');
        return;
    } 
    button.setAttribute('disabled', '');    
}
//------------------------------------------------- ok
const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value); //salva valor inserido no localSorage do navegador
    window.location = 'pages/game.html'; //redireciona
}

input.addEventListener('input', validateInput);
form.addEventListener('submit' , handleSubmit);