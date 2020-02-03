const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// iniciando o app
const app = express();
app.use(express.json());

//cors
//para qualquer dominio poder acessar a api
app.use(cors());

//iniciando o database
mongoose.connect('mongodb://localhost:27017/nodeapi', 
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

//http://localhost:1001/api/products
app.listen(1001);