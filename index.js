var express = require('express')
  , app = express.createServer();

app.configure(function () {
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    });
    app.use(app.router);
});

app.configure('development', function () {
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler());
});

app.listen(8888);
console.log('express running at http://localhost:%d', 8888);
