import Deck from "./deck.js";



const playerCard = document.querySelector('.playercards')
const dealerCard = document.querySelector('.dealercards')


const deck = new Deck();
deck.shuffleDeck();
console.log(deck.cards);



dealerCard.appendChild(deck.cards[0].addSuit())
dealerCard.appendChild(deck.cards[0].addValue())


playerCard.appendChild(deck.cards[0].addSuit())
playerCard.appendChild(deck.cards[0].addValue())

