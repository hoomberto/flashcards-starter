const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach('Setup', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be initialized with a deck', () => {
    expect(round.deck).to.be.an.instanceof(Deck);
    expect(round.deck).to.deep.equal(deck)
    expect(round.deck.cards[0]).to.be.an.instanceof(Card);
  })

  it('should return the current card being played', () => {
    const deck2 = new Deck([card3, card2, card1]);
    const round2 = new Round(deck2);

    let currentCard = round.returnCurrentCard()
    let currentCard2 = round2.returnCurrentCard()

    expect(currentCard).to.deep.equal({ id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
    })

    expect(currentCard2).to.deep.equal({ id: 12,
      question: 'What is Travis\'s favorite stress reliever?',
      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      correctAnswer: 'playing with bubble wrap'
    })
  })

  it('should create a new Turn instance when a guess is made', () => {
    let guess = round.takeTurn('sea otter')
    let guess2 = round.takeTurn('spleen')

    expect(guess).to.equal('correct!')
    expect(guess2).to.equal('incorrect!')
  })

  it('should update the turn count when taking a guess', () => {
    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.takeTurn('spleen')).to.equal('incorrect!')
  })

  it('should store incorrect guesses in an array of incorrectGuesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
    expect(round.turns).to.equal(0)
    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.turns).to.equal(1)
    expect(round.takeTurn('spleen')).to.equal('incorrect!')
    expect(round.turns).to.equal(2)
    expect(round.incorrectGuesses).to.deep.equal([14]);
    expect(round.correctGuesses).to.deep.equal([1]);

    expect(round.returnCurrentCard()).to.deep.equal({ id: 12,
      question: 'What is Travis\'s favorite stress reliever?',
      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      correctAnswer: 'playing with bubble wrap'
    })
  })

  it('should calculates and returns the percentage of correct guesses', () => {
    expect(round.calculatePercentCorrect()).to.equal(0)

    round.takeTurn('sea otter')
    round.takeTurn('spleen')

    expect(round.calculatePercentCorrect()).to.equal(50)
  })

  it('should return the percent of rounds won when ending a round', () => {
    round.takeTurn('sea otter')
    round.takeTurn('spleen')

    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  })
});
