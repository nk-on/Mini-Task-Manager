const express = require('express');
const app = express();
const PORT = 3000;
const home = require('./routes/home');
const addTasks = require('./routes/add-tasks')
const path = require('path');
app.set('view engine', 'ejs'); 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(home);
app.use(addTasks)
app.listen(PORT);