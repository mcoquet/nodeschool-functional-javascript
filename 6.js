function countWords(inputWords) {
	var o = {} 
	inputWords.reduce(function(prev,cur,index){
		if (!o[cur]){ o[cur] = 1}
		else {
			o[cur] = o[cur]+1;
		}
	},null);
	return o;
}

module.exports = countWords
