const Turn = require('../src/Turn.js');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
}

module.exports = Round;
