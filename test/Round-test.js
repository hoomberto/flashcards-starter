const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn.js');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {

  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be initialized with a deck', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.deck).to.be.an.instanceof(Deck);
    expect(round.deck).to.deep.equal(deck)
    expect(round.deck.cards[0]).to.be.an.instanceof(Card);
  })

  it('should return the current card being played', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    const deck2 = new Deck([card3, card2, card1]);

    const round = new Round(deck);
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
});
