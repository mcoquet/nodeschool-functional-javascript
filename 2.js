
function repeat(o,n){
	for (var i=0; i<n; i++)
	{
		o();
	}
}

module.exports=repeat;
