function duckCount() {

  var args = [];
  for(var x = 0; x < arguments.length; x++){
    args.push(arguments[x]);
  }


  var count = args.reduce(function(p,c,i,A){
    var innerCount = 0;

    if (Number.isNaN(Number(p)))
    {

      if (Object.prototype.hasOwnProperty.call(p,"quack")){
        innerCount = 1;
      }
    }
    else {
      innerCount = p;
    }

    if (Object.prototype.hasOwnProperty.call(c,"quack")){
      innerCount++;
    }

    return innerCount;

  });

  return count;
}

module.exports = duckCount;
