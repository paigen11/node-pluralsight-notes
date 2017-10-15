const http = require('http');

const options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('Going to make request...');

http.get(options, function(response){
   console.log(response.statusCode);
   response.pipe(process.stdout);
});
//
// req.end();
