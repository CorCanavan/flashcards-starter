const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card;
  let turn;

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be instantiated with a string and a card object', () => {
    expect(turn.guess).to.be.a('string');
    expect(turn.card).to.be.an('object');
  });

  it('should return the guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the card object', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate guess to be true or false', () => {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return incorrect or correct based on the guess', () => {
    expect(turn.giveFeedback()).to.equal('correct!');
  });
});
