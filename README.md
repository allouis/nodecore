# nodecore

## Usage

```javascript

var core = require('nodecore');

core.http.createServer(function (req, res) {
  core.fs.createReadStream(core.path.resolve(__dirname + '/public' + req.url).pipe(res);
}).listen(process.env.PORT);

```
