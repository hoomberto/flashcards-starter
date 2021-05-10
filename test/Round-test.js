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

});
