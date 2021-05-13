const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn.js');
const Card = require('../src/Card');

describe('Turn', () => {
  let card, turn;
  beforeEach('Setup', () => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  })
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to have a guess and flashcard', () => {
    expect(turn.card).to.be.an.instanceof(Card);
    expect(turn.card.answers).to.include('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should be able to return its guess', () => {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should be able to return its card', () => {
    expect(turn.returnCard()).to.deep.equal(
      { id: 1,
        question: 'What is Robbie\'s favorite animal',
        answers: ['sea otter', 'pug', 'capybara'],
        correctAnswer: 'sea otter'
      });
  });

  it('should indicate if the user’s guess matches the correct answer on the card', () => {
    const turn2 = new Turn('sea otter', card);

    expect(turn.evaluateGuess()).to.be.false;
    expect(turn2.evaluateGuess()).to.be.true;
  });

  it('should return either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', () => {
    const turn2 = new Turn('sea otter', card);

    expect(turn.evaluateGuess()).to.be.false;
    expect(turn2.evaluateGuess()).to.be.true;

    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});
