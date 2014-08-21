function getShortMessage(messages)
{
	return messages.map(function(item){
		if (item.message.length < 50)
		{
			return item.message;
		}
	}).filter(function(item){ if(item){ return item; }});
}

module.exports = getShortMessage
