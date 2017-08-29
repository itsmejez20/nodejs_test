var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {

    if (req.url === "/create") {
        fs.readFile('images/pet1.jpeg', function(error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, {'Content-Type': 'image/jpeg'});
                resp.write(pgResp);
            }
            
            resp.end();
        });
    }
});

server.listen(5050);
 
console.log('Server Started listening on 5050');
