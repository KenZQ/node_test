var http = require("http");
var url = require("url");

function start(route, handlers){
	function onRequest(request, response){
		var pathName = url.parse(request.url).pathname;
		console.log("Request for " + pathName + "RECEIVERD.");
		route(handlers, pathName, request, response);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server is starting");
}

exports.start = start;