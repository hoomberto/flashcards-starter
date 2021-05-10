class Card {
  constructor(id, question, possible, correct) {
    this.id = id;
    this.question = question;
    this.answers = possible;
    this.correctAnswer = correct;
  }
}

module.exports = Card;
