const express = require('express');
const router = express.Router();

router.get('/login',(req, res)=>{
    res.send('users\'s login page');
})

router.get('/register',(req, res)=>{
    res.send('users\'s register page');
})
module.exports = router;