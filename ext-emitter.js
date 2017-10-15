var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function() {
    console.log("I've started!");
});

r.on('data', (d) => {
    console.log(" I received data -> " + d);
});

r.on('end', (t) => {
    console.log("I'm done, with " + t + " data events.");
});