// Sorry for unreadable code :c

const countDeviders = require('./countDeviders');

const factorialSign = "!";

module.exports = function zeros(expression) {
  var number = "";
  var results = [];

  for (var it = 0; it < expression.length; it++) {
    var symbol = expression[it];
    if (symbol === factorialSign) {
      it ++;
      number = parseInt(number);
      var result = { countTwos: 0, countFives: 0};
      // doubleFactorial
      if (expression[it] === factorialSign) {
        it ++;
        for(var i = 0; i <= Math.ceil((number / 2) - 1); i++) {
          result.countTwos += countDeviders(number - 2 * i, 2);
          result.countFives += countDeviders(number - 2 * i, 5);
        }
      // factorial      
      } else {
        for(var i = 1; i <= number; i++){
          result.countTwos += countDeviders(i, 2);
          result.countFives += countDeviders(i, 5);
        }
      }
      results.push(result);
      number = "";
    }  else {
      number += symbol;
    }
  }

  var totalCountTwos = 0;
  var totalCountFives = 0;
  
	for(var i = 0; i < results.length; i ++) {
		totalCountTwos += results[i].countTwos;
		totalCountFives += results[i].countFives;
  }
  
	return Math.min(totalCountTwos, totalCountFives);
}