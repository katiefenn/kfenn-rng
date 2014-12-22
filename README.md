# Roman Numeral Generator
A utility for converting decial numbers to roman numerals.

## Getting Started
The Roman Numeral Generator is bundled as a CommonJS module. To used, load it into your script using require();

```
var RomanNumeralGenerator = require("../src/RomanNumeralGenerator"),
    romanNumeralGenerator = new RomanNumeralGenerator();
    
romanNumeralGenerator.generate(7);
// "VII"

romanNumeralGenerator.parse('VII');
// 7

// Invalid input responses:
romanNumeralGenerator.generate(0);
// ""

romanNumeralGenerator.parse('FOO');
// -1
```

## Development
This module is developed using Grunt to automate common development tasks. Mocha unit tests and JSHint run automatically when files are changed.

To run grunt, use the following command:

```
npm install
grunt dev
```

To run Mocha unit tests without grunt:

```
npm test
```
