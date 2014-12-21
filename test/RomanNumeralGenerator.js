var RomanNumeralGenerator = require("../src/RomanNumeralGenerator"),
    should = require("chai").should();

describe("RomanNumeralGenerator", function () {
    beforeEach(function () {
        romanNumeralGenerator = new RomanNumeralGenerator();
    });

    describe("generate method", function() {
        it("should return 'I' when called with '1'", function () {
            romanNumeralGenerator.generate(1).should.equal("I");
        });

        it("should return 'II' when called with '2'", function () {
            romanNumeralGenerator.generate(2).should.equal("II");
        });

        it("should return 'III' when called with '3'", function () {
            romanNumeralGenerator.generate(3).should.equal("III");
        });

        it("should return 'IV' when called with '4'", function () {
            romanNumeralGenerator.generate(4).should.equal("IV");
        });

        it("should return 'V' when called with '5'", function () {
            romanNumeralGenerator.generate(5).should.equal("V");
        });

        it("should return 'VI' when called with '6'", function () {
            romanNumeralGenerator.generate(6).should.equal("VI");
        });

        it("should return 'VII' when called with '7'", function () {
            romanNumeralGenerator.generate(7).should.equal("VII");
        });

        it("should return 'VIII' when called with '8'", function () {
            romanNumeralGenerator.generate(8).should.equal("VIII");
        });

        it("should return 'IX' when called with '9'", function () {
            romanNumeralGenerator.generate(9).should.equal("IX");
        });

        it("should return 'X' when called with '10'", function () {
            romanNumeralGenerator.generate(10).should.equal("X");
        });

        it("should return 'XI' when called with '11'", function () {
            romanNumeralGenerator.generate(11).should.equal("XI");
        });

        it("should return 'XV' when called with '15'", function () {
            romanNumeralGenerator.generate(15).should.equal("XV");
        });

        it("should return 'XX' when called with '20'", function () {
            romanNumeralGenerator.generate(20).should.equal("XX");
        });

        it("should return 'XXX' when called with '30'", function () {
            romanNumeralGenerator.generate(30).should.equal("XXX");
        });

        it("should return 'XL' when called with '40'", function () {
            romanNumeralGenerator.generate(40).should.equal("XL");
        });

        it("should return 'L' when called with '50'", function () {
            romanNumeralGenerator.generate(50).should.equal("L");
        });

        it("should return 'LX' when called with '60'", function () {
            romanNumeralGenerator.generate(60).should.equal("LX");
        });

        it("should return 'LXX' when called with '70'", function () {
            romanNumeralGenerator.generate(70).should.equal("LXX");
        });

        it("should return 'LXXX' when called with '80'", function () {
            romanNumeralGenerator.generate(80).should.equal("LXXX");
        });

        it("should return 'XC' when called with '90'", function () {
            romanNumeralGenerator.generate(90).should.equal("XC");
        });

        it("should return 'C' when called with '100'", function () {
            romanNumeralGenerator.generate(100).should.equal("C");
        });

        it("should return 'CL' when called with '150'", function () {
            romanNumeralGenerator.generate(150).should.equal("CL");
        });

        it("should return 'CC' when called with '200'", function () {
            romanNumeralGenerator.generate(200).should.equal("CC");
        });

        it("should return 'CCC' when called with '300'", function () {
            romanNumeralGenerator.generate(300).should.equal("CCC");
        });

        it("should return 'CD' when called with '400'", function () {
            romanNumeralGenerator.generate(400).should.equal("CD");
        });

        it("should return 'D' when called with '500'", function () {
            romanNumeralGenerator.generate(500).should.equal("D");
        });

        it("should return 'DC' when called with '600'", function () {
            romanNumeralGenerator.generate(600).should.equal("DC");
        });

        it("should return 'DCC' when called with '700'", function () {
            romanNumeralGenerator.generate(700).should.equal("DCC");
        });

        it("should return 'DCCC' when called with '800'", function () {
            romanNumeralGenerator.generate(800).should.equal("DCCC");
        });

        it("should return 'CM' when called with '900'", function () {
            romanNumeralGenerator.generate(900).should.equal("CM");
        });

        it("should return 'M' when called with '1000'", function () {
            romanNumeralGenerator.generate(1000).should.equal("M");
        });

        it("should return 'MX' when called with '1010'", function () {
            romanNumeralGenerator.generate(1010).should.equal("MX");
        });

        it("should return 'ML' when called with '1050'", function () {
            romanNumeralGenerator.generate(1050).should.equal("ML");
        });

        it("should return 'MC' when called with '1100'", function () {
            romanNumeralGenerator.generate(1100).should.equal("MC");
        });

        it("should return 'MD' when called with '1500'", function () {
            romanNumeralGenerator.generate(1500).should.equal("MD");
        });

        it("should return 'MCM' when called with '1900'", function () {
            romanNumeralGenerator.generate(1900).should.equal("MCM");
        });

        it("should return 'MM' when called with '2000'", function () {
            romanNumeralGenerator.generate(2000).should.equal("MM");
        });
    });

    describe("parse method", function () {
        it("should return '1' when called with 'I'", function () {
            romanNumeralGenerator.parse('I').should.equal(1);
        });

        it("should return '2' when called with 'II'", function () {
            romanNumeralGenerator.parse('II').should.equal(2);
        });

        it("should return '3' when called with 'III'", function () {
            romanNumeralGenerator.parse('III').should.equal(3);
        });

        it("should return '0' when called with 'IIII'", function () {
            romanNumeralGenerator.parse('IIII').should.equal(-1);
        });

        it("should return '4' when called with 'IV'", function () {
            romanNumeralGenerator.parse('IV').should.equal(4);
        });

        it("should return '5' when called with 'V'", function () {
            romanNumeralGenerator.parse('V').should.equal(5);
        });

        it("should return '6' when called with 'VI'", function () {
            romanNumeralGenerator.parse('VI').should.equal(6);
        });

        it("should return '7' when called with 'VII'", function () {
            romanNumeralGenerator.parse('VII').should.equal(7);
        });

        it("should return '8' when called with 'VIII'", function () {
            romanNumeralGenerator.parse('VIII').should.equal(8);
        });

        it("should return '9' when called with 'IX'", function () {
            romanNumeralGenerator.parse('IX').should.equal(9);
        });

        it("should return '10' when called with 'X'", function () {
            romanNumeralGenerator.parse('X').should.equal(10);
        });

        it("should return '15' when called with 'XV'", function () {
            romanNumeralGenerator.parse('XV').should.equal(15);
        });

        it("should return '20' when called with 'XX'", function () {
            romanNumeralGenerator.parse('XX').should.equal(20);
        });

        it("should return '30' when called with 'XXX'", function () {
            romanNumeralGenerator.parse('XXX').should.equal(30);
        });

        it("should return '40' when called with 'XL'", function () {
            romanNumeralGenerator.parse('XL').should.equal(40);
        });

        it("should return '50' when called with 'L'", function () {
            romanNumeralGenerator.parse('L').should.equal(50);
        });

        it("should return '90' when called with 'XC'", function () {
            romanNumeralGenerator.parse('XC').should.equal(90);
        });

        it("should return '100' when called with 'C'", function () {
            romanNumeralGenerator.parse('C').should.equal(100);
        });

        it("should return '200' when called with 'CC'", function () {
            romanNumeralGenerator.parse('CC').should.equal(200);
        });

        it("should return '300' when called with 'CC'", function () {
            romanNumeralGenerator.parse('CC').should.equal(200);
        });

        it("should return '400' when called with 'CD'", function () {
            romanNumeralGenerator.parse('CD').should.equal(400);
        });

        it("should return '500' when called with 'D'", function () {
            romanNumeralGenerator.parse('D').should.equal(500);
        });

        it("should return '900' when called with 'CM'", function () {
            romanNumeralGenerator.parse('CM').should.equal(900);
        });

        it("should return '1000' when called with 'M'", function () {
            romanNumeralGenerator.parse('M').should.equal(1000);
        });

        it("should return '2000' when called with 'MM'", function () {
            romanNumeralGenerator.parse('MM').should.equal(2000);
        });
    });

    describe("isValidNumeral method", function () {
        it("should return false when called with invalid numeral frequency", function () {
            romanNumeralGenerator.isValidNumeral('IIII').should.be.false;
        });

        it("should return false when called with ascending order numeral", function () {
            romanNumeralGenerator.isValidNumeral('VX').should.be.false;
        });

    });
});
