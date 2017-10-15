var request = require('request');

var fs = require('fs');

var zlib = require('zlib');


request('http://wwww.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));
