const chai = require('chai');
const expect = chai.expect;
const Box = require('../src/Turn.js');

describe('Turn', () => {
  it.skip('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });
});
