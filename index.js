require ('dotenv').config();
//import 'dotenv/config'; // Alternative way to load environment variables ES6 style
// console.log(process.env.TWITTER_API_KEY);
const express = require('express');
const app = express();
const port = 4000;

app.get('/',(req, res)=>{
    res.send('Hello World!');
})

app.get('/twitter',(req,res)=>{
    res.send('<h1>Twitter endpoint hit</h1>');
})

app.listen(process.env.PORT,()=>{
   console.log(`serving on http://localhost:${port}`)
})