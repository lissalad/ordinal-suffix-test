const ordinalSuffix = require('lissa-ordinal-suffix');

function testOrdinalSuffix() {
  for (let i = 1; i <= 100; i += 1) {
    console.log(ordinalSuffix(i));
  }
}

testOrdinalSuffix();