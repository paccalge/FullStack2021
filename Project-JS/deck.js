const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["♠", "♥", "♦", "♣"];


export default class Deck {
  constructor(cards = fullDeck()) {
    this.cards = cards;
  }

  
          shuffleDeck() {
            for (let i = 1 ;  i < this.cards.length; i++) {
                const newPosition = Math.floor(Math.random() * (i + 1))
                this.cards[newPosition] = this.cards[i]
                        } 
                }

}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }


          addSuit() {
                const suitAdder = document.createElement('div')
                suitAdder.innerText = this.suit
                return suitAdder

                  
            }

          addValue() {
              const valueAdder = document.createElement('div')
              valueAdder.innerText = this.value
              return valueAdder
          }


         // no sé cómo poner color a las cartas

         
          
            
}
         

function fullDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value);
    });
  });
}


