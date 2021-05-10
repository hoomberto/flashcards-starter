const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn.js');
const Card = require('../src/Card');

describe('Turn', () => {
  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to have a guess and flashcard', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.card).to.be.an.instanceof(Card)
    expect(turn.card.answers).to.include('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should be able to return its guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should be able to return its card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).to.deep.equal(
      { id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    });
  });

  it('should indicate if the user’s guess matches the correct answer on the card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);

    expect(card.correctAnswer).to.equal('sea otter');
    expect(turn1.guess).to.equal('pug');
    expect(turn1.evaluateGuess()).to.be.false;

    expect(turn2.guess).to.equal('sea otter');
    expect(turn2.evaluateGuess()).to.be.true;
  })

  it('should return either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card);
    const turn2 = new Turn('sea otter', card);

    expect(turn1.evaluateGuess()).to.be.false;
    expect(turn2.evaluateGuess()).to.be.true;

    expect(turn1.giveFeedback()).to.equal('incorrect!')
    expect(turn2.giveFeedback()).to.equal('correct!')
  })
});
