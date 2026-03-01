const express = require('express');
const app = express();
const PORT = 3000;
const home = require('./routes/home')
app.use(home)
app.listen(PORT);