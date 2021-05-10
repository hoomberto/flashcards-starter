const Turn = require('../src/Turn.js');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard;
  }
  returnCurrentCard() {
    return this.currentCard || this.deck.cards[0];
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    // this.turns++;
    // this.currentCard = this.deck.cards[1];
    return turn.giveFeedback();
  }
}

module.exports = Round;
