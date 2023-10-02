//server.js
const express = require('express');
const mongoose = require('mongoose');

const app=express();
const port=3000;

mongoose.connect('mongodb://localhost:27017/centecontactsusers', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});