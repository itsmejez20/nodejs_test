// var http = require('http');
// var fs = require("fs");

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   response.write(html);  
//         response.end();


//   fs.readFile('input.html', function (err, data) {
// 	if (err) {
// 		console.log(err.stack);
// 		return;
// 	}
// 	console.log(data.toString());

//   res.end(data.toString());
// });
// console.log("Program Ended");

// }).listen(3000, "127.0.0.1");
// console.log('Server running at http://127.0.0.1:3000/');

var http = require('http');
var fs = require('fs');

const PORT=3000; 

fs.readFile('./index.html', function (err, data) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(data);  
        response.end();  
    }).listen(PORT);
});
console.log('Server running at http://127.0.0.1:3000/');