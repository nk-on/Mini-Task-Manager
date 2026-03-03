const express = require('express');
const router = express.Router();
const path  = require('path');
const tasks = [];
let id = 1;
router.get('/add-tasks', (req, res) => {
    res.sendFile(path.join(__dirname,'../','views/add-tasks.html'))
});
router.post('/task', (req, res) => {
    const {task} = req.body;
    tasks.push({
        taskId:id++,
        task
    })
    console.log(tasks)
    res.redirect('/add-tasks')
})
module.exports = router;