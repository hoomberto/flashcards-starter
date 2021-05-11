const Turn = require('../src/Turn.js');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard;
    this.incorrectGuesses = [];
    this.correctGuesses = []
  }
  returnCurrentCard() {
    return this.currentCard || this.deck.cards[0];
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    this.turns++;
    (turn.evaluateGuess())
    ? this.correctGuesses.push(turn.card.id)
    : this.incorrectGuesses.push(turn.card.id)
    this.deck.cards.shift();
    this.currentCard = this.deck.cards[0];
    return turn.giveFeedback();
  }
}

module.exports = Round;
