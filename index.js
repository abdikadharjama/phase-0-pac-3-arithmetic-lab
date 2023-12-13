// add two number
function add(num1, num2) {
    return num1 + num2;
  }
  
  module.exports = { add };

  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  module.exports = { subtract };

  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  module.exports = { multiply };

  function divide(num1, num2) {
    return num1 / num2;
  }
  
  module.exports = { divide };

  function divide(num1, num2) {
    return num1 / num2;
  }
  
  module.exports = { divide };
  
  function increment(num) {
    return ++num;
  }
  
  module.exports = { increment };

  function decrement(num) {
    return --num;
  }
  
  module.exports = { decrement };


function makeInt(string) {
    return parseInt(string, 10);
  }
  
  module.exports = { makeInt };

  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  module.exports = { preserveDecimal };