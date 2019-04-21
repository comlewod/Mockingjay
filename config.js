const path = require('path');

var config = {
	SERVER_PORT: 5006,
	ROOT: __dirname,
};

if( process.env.NODE_ENV == 'production' ){
}

module.exports = config;
