const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let card1, card2, card3, deck;
  beforeEach('Setup', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);

    return deck
  })
  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be initialized with an array of card objects', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
    expect(deck.cards[0]).to.be.an.instanceOf(Card);
  })

  it('should be able to count the cards within the deck', () => {
    let counted = deck.countCards()
    expect(counted).to.equal(3)
  });
});
