var Duplex = require('stream').Duplex;
var util = require('util');

function NullDuplexStream(options) {
  Duplex.call(this, options);
}

util.inherits(NullDuplexStream, Duplex);

NullDuplexStream.prototype._write = function (chunk, encoding, callback) {
  // write to this NullDuplexStream
  callback();
};

NullDuplexStream.prototype._read = function (n) {
  // read from this NullDuplexStream
  this.push(null);
};

module.exports = NullDuplexStream;

