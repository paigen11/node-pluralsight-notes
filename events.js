const EventEmitter = require('events').EventEmitter;

const getResource = (c) => {
    const e = new EventEmitter();
    process.nextTick(() => {
       var count = 0;
       e.emit('start');
       var t = setInterval(() => {
          e.emit('data', ++count);
          if(count === c) {
              e.emit('end', count);
              clearInterval(t);
          }
       }, 10);
    });
    return(e);
};

var r = getResource(5);

r.on('start', function() {
    console.log("I've started!");
});

r.on('data', (d) => {
    console.log(" I received data -> " + d);
});

r.on('end', (t) => {
   console.log("I'm done, with " + t + " data events.");
});
