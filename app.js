const path = require('path');
const express = require('express');

var config = {
	SERVER_PORT: 5006,
	ROOT: __dirname,
};

var app = express();

app.use(express.static(path.join(config.ROOT, 'public')));
app.get('/*', (req, res) => {
	res.sendFile(path.join(config.ROOT, 'views', 'index.html'))
})

app.listen(config.SERVER_PORT);

