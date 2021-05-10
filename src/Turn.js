const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess || 'No guess present';
    this.card = card || 'No card present';
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    let result = (this.guess === this.card.correctAnswer) ? true : false
    return result
  }
  giveFeedback() {
    let result = (this.evaluateGuess()) ? 'correct!' : 'incorrect!'
    return result
  }
}

module.exports = Turn;
