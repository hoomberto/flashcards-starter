const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    const cards = prototypeQuestions.map(question =>
      { return new Card(question.id, question.question, question.answers, question.correctAnswer) }
    );
    this.currentRound = new Round(new Deck(cards));
    this.currentRound.startTimer();
    this.printMessage(this.currentRound.deck)
    this.printQuestion(this.currentRound)
  }
  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
