# Null Duplex Stream

a duplex stream eat anything, milk nothing.

```js
var fs = require('fs');
var NullDuplexStream = require('../');

var nullStream = new NullDuplexStream();

// eat all your stdin input
process.stdin.pipe(nullStream);

// output nothing
nullStream.pipe(process.stdout);
```

## Installation

npm install null-duplex-stream

## License

MIT

