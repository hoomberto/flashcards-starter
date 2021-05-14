const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = undefined;
    this.incorrectGuesses = [];
    this.correctGuesses = []
    this.timer;
    this.time = 0;
  }
  returnCurrentCard() {
    return this.currentCard || this.deck.cards[0];
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    this.turns++;
    (turn.evaluateGuess())
      ? this.correctGuesses.push(turn.card.id)
      : this.incorrectGuesses.push(turn.card.id);
    this.deck.cards.shift();
    this.currentCard = this.deck.cards[0];
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    if (!this.correctGuesses.length) {
      return 0;
    }
    return Math.floor((this.correctGuesses.length / this.turns) * 100)
  }
  startTimer() {
    this.timer = setInterval(() => {
      this.time++;
    }, 1000);
  }
  formatTime(time) {
    return {
      minutes: (Math.floor(time / 60)),
      seconds: (time % 60)
    }
  }
  endRound() {
    clearInterval(this.timer);
    let formattedTime = this.formatTime(this.time);
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    console.log(`You completed the quiz in ${formattedTime.minutes} minutes and ${formattedTime.seconds} seconds`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
