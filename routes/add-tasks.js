const express = require('express');
const router = express.Router();
const path  = require('path');
const tasks = [];
function uniqueIdGenerator() {
    let id = Math.floor(Math.random()*100000);
    tasks.forEach((task) => {
        if (task.id === id) {
            id = Math.floor(Math.random()*100000);
        }
    });
    return id;
}
router.get('/add-tasks', (req, res) => {
    res.sendFile(path.join(__dirname,'../','views/add-tasks.html'))
});
router.post('/task', (req, res) => {
    const {task} = req.body;
    tasks.push({
        taskId:uniqueIdGenerator(),
        task
    })
    console.log(tasks)
    res.redirect('/add-tasks')
})
module.exports = router;