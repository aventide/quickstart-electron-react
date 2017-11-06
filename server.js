const express = require('express'),
	  bodyParser = require('body-parser');

let app = express();

const port = 5000;
app.set('port', port);

// parse JSON body data
app.use(bodyParser.json());

// STATIC 

// app.use('/assets', express.static(__dirname + '/some_dir'));

// ROUTES

// app.get('/', (request, response) => {
// 	response.sendFile(__dirname + "/some_dir/index.html");
// });

// Start the web server
let server = app.listen(port, () => {
	console.log('Listening on port ' + server.address().port);
});