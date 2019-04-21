const path = require('path');
const express = require('express');
let config = require('./config')

let app = express();

app = require('./middlewares/app')(app);

app.listen(config.SERVER_PORT);

