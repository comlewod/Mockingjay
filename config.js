const path = require('path');

var config = {
	SERVER_PORT: 5006,
	ROOT: __dirname,

	PROGRAM_PATH: path.join(__dirname, 'database', 'program'),
};

if( process.env.NODE_ENV == 'production' ){
}

module.exports = config;
