const path = require('path');

var config = {
	SERVER_PORT: 5006,
	ROOT: __dirname,

	PROJECTS_PATH: path.join(__dirname, 'database', 'projects'),
};

if( process.env.NODE_ENV == 'production' ){
}

module.exports = config;
