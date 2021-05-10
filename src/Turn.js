const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess || 'No guess present';
    this.card = card || 'No card present';
  }
  returnGuess() {
    return this.guess;
  }
}

module.exports = Turn;
