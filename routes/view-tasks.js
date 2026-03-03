const express = require('express');
const router = express.Router();
const {tasks} = require('./add-tasks')
router.get('/view-tasks',(req,res)=>{
    res.render('view-tasks',{tasks});
})
module.exports = router