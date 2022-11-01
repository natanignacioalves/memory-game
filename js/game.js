
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

//---------------------------------OK
const characters = [
    'fiona',
    'gato-de-botas',
    'shrek',
    'burro',
    'pinoquio',
    'lobo-mau',
    'Doris',
    'fada-Madrinha',
    'principe-encantado',
    'biscoito',
];
//-----------------------------------ok
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }
//----------------------------------ok

let firstCard = '';
let secondCard = '';

const checkEndgame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 20) {
        alert('Parabéns, voce conseguiu!');
    }
}
 
const checkCards = () => {
const firstCharacter = firstCard.getAttribute('data-character');
const secondCharacter = secondCard.getAttribute('data-character');

if (firstCharacter === secondCharacter){

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndgame();

} else {
   setTimeout(() =>  {

    firstCard.classList.remove('reveal-card');
    secondCard.classList.remove('reveal-card');

    firstCard = '';
    secondCard = '';

   }, 500 );
   
   
}

}

const revealCard = ({target}) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    
    }   else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;
       
        checkCards();
    
    }
 
    
}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imagens/${character}.png')`;
  
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);
  
    return card;
}
//-------------------------------------OK
const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
    
    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();

