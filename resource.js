var util = require('util');
var EventEmitter = require('events').EventEmitter;


(m) => {
    const maxEvents = m;
    const self = this;

    process.nextTick(() => {
       var count = 0;
       self.emit('start');
       var t = setInterval(() => {
          self.emit('data', ++count);
          if(count === maxEvents) {
              self.emit('end', count);
              clearInterval(t);
          }
       }, 10);
    });
};

util.inherits(Resource, EventEmitter);

module.exports = Resource;