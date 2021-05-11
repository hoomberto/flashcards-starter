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

})
