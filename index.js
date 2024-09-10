const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');

const uservalidation = require('./contollers/user')

const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://root:root@cluster0.p5wso0a.mongodb.net/");
const conn = mongoose.connection;



app.post('/register', uservalidation
    //  (req, res)=>{
    // one.create(req.body)
    // .then(Register => res.json(Register))
    // .catch(err => res.json(err))
    //  }
)

conn.once('open', ()=>{
    console.log('successfully database connected')
});

conn.once('error', ()=>{
    console.log('error in connection');
    process.exit();
})

app.listen(5000, ()=>{
    console.log('server started successfully')
});
app.get('/', (req, res)=>{
    res.send('Hello world')
})