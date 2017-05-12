var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*Call weather API*/
app.post('/get-data', function(req, res) {
	console.log(req.body)
	var options = {
	  host: 'api.openweathermap.org',
	  path: '/data/2.5/find?q='+req.body.city+'&type=like&sort=population&cnt=30&units=metric&APPID=73136fa514890c15bc4534e7b8a1c0c4'
	};

	callback = function(response) {
	  var str = '';

	  //another chunk of data has been recieved, so append it to `str`
	  response.on('data', function (chunk) {
	    str += chunk;
	  });

	  //the whole response has been recieved, so we just print it out here
	  response.on('end', function () {
	    console.log(str);
	    res.send(str)
	  });
	}

	http.request(options, callback).end();
		// res.send(http.request(options, callback));
});

var PORT = 8080;
var HOST_NAME = '127.0.0.1';
var DATABASE_NAME = 'project';

//mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get("*", function(req, res){
	res.sendFile(__dirname + '/public/index.html')
});

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});


