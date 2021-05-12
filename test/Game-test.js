const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn.js');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  it('should be a function', () => {
    const round = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should announce the game and number of cards in the deck when starting a game', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3])
    const game = new Game();
    game.start(deck);

    // const currentRound = game.currentRound

    // console.log(currentRound.currentCard);
    expect(game.currentRound).to.be.an.instanceof(Round);
    // expect(game.currentRound).to.deep.equal({
    //   deck: { cards: [ card1, card2, card3 ] },
    //   turns: 0,
    //   currentCard: undefined,
    //   incorrectGuesses: [],
    //   correctGuesses: [],
    // })
  });

})
