class Card {
  constructor(num, question, possible, correct) {
    this.number = num;
    this.question = question;
    this.possibleAnswers = possible;
    this.correctAnswer = correct;
  }
}

module.exports = Card;
