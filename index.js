const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');
const app = express();

require('dotenv').config();
requireDir('./src/models');

app.use(cors());
app.use(express.json());
app.use('/public/api/v1',require('./src/routes'))
app.listen(3001, function() {
	console.log('Rodando na porta 3001');
});