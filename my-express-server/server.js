//server.js
const express = require('express');
const mongoose = require('mongoose');

const app=express();
const port=3000;

mongoose.connect('mongodb://localhost:27017/centecontacts', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res)=>{
    res.send('Hello, this is your Express server!');
});

app.get('/users', async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch (error){
        res.status(500).json({message: error.messafe});
    }
})

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});
