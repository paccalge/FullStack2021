import Deck from "./deck.js";


// por qué lo hace sólo en el primer slot?
const playerCard = document.querySelector('.playercards')
const dealerCard = document.querySelector('.dealercards')


// por qué esto no funciona? 
const restart = document.getElementById('restart')

const deck = new Deck();





deck.shuffleDeck();
console.log(deck.cards);

    
dealerCard.appendChild(deck.cards[0].addValue())
dealerCard.appendChild(deck.cards[0].addSuit()) 
    
playerCard.appendChild(deck.cards[0].addValue())
playerCard.appendChild(deck.cards[0].addSuit())


// por qué esto no funciona? 
restart.addEventListener('click' , deck.shuffleDeck())
// ¿cómo hago para que al ejecutarse este evento, se repartá 1 carta al Dealer y 2 al Player?



