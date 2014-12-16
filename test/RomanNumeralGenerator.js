var RomanNumeralGenerator = require('../src/RomanNumeralGenerator'),
    should = require('chai').should();

describe('RomanNumeralGenerator', function () {
    beforeEach(function () {
        romanNumeralGenerator = new RomanNumeralGenerator();
    });

    it('should return "I" when the generate method is called with "1"', function () {
        romanNumeralGenerator.generate(1).should.equal('I');
    });
});
