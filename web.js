var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer('this is buf');
  var index = fs.readFileSync('index.html')
//  buf = fs.readFileSync(./index.html);
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
