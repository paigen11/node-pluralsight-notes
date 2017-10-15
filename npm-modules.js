const request = require('request');

request('http://www.pluralsight.com/', function (err, res, body) {
    if(!err && res.statusCode == 200){
        console.log(body);
        // console.dir(response);
    }
});