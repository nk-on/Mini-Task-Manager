const express = require('express');
const app = express();
const PORT = 3000;
const home = require('./routes/home');
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))
app.use(home)
app.listen(PORT);