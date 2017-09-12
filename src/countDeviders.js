module.exports = function countDeviders(number, devider) {
	var result = 0;
	while(number % devider === 0) {
		result ++;
		number = number/devider;
	}
	return result;
}