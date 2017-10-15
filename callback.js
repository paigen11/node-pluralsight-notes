var mathfun = require('./mathfun');

//if input is even, double it
//if input is odd, error
//(call takes random amount of time < 1s)
var handleResults = function(err, results, time) {
  if(err) {
      console.log("ERROR: " + err.message);
  } else {
      console.log("The results are: " + results + " ( " + time + "ms)");
  }
};

for(var i = 0; i < 10; i++){
	console.log("Calling evenDoubler for log : " + i);
	mathfun.evenDoubler(i, handleResults);
}

console.log("-----");

console.log('The foo variable from module mathfun ' + mathfun.foo);

console.log('The maxtime variable is not exported ' + mathfun.maxTime);