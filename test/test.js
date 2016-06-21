var fs = require('fs');
var NullDuplexStream = require('../');

var nullStream = new NullDuplexStream();

process.stdin.pipe(nullStream);

nullStream.pipe(process.stdout);

console.log('test');

nullStream.on('finish', function () {
  // nullStream as a stream.Writable is finished and has flushed all of data.
  console.error('finish');
});

nullStream.on('end', function () {
  // nullStream as a stream.Readable is end and no more data for readers.
  console.error('end');
});

