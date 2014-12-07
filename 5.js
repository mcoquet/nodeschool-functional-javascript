
function checkUsersValid(goodUsers) {
	return function(testedones){
		return testedones.every(function(testedone){  
			return goodUsers.some(function(goodOne){ 
				return testedone.id == goodOne.id;   
			}) 
		})
	}
}
module.exports = checkUsersValid
