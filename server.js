var http = require('http);
var server = http.createServer();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('hello world');
    res.end();
})
