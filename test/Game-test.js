const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game;
  beforeEach('Setup', () => {
    game = new Game();
  })
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create cards, put cards in deck, create new round with deck on start', () => {
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
  });
});
