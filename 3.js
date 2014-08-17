function doubleAll(numbers) {
	var result = []
	result = numbers.map(function(item){
		return item*2;
	});
	
	return result
}

module.exports = doubleAll
		  
