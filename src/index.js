// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if(currency<0) 
  	return {};
  if(currency>10000)
  	return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
  var nominals={'H':50,'Q':25,'D':10,'N':5,'P':1};
  var result={};
  var rest=currency;
  for (var key in nominals) {
  	var count=Math.floor(rest/nominals[key]);
  	if(count>0)
  		result[key]=count;
  	rest=rest%nominals[key];
   }
   return result;
}
