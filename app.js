const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

//routes
const homeRoute = require('./routes/homeRoute')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static('public'));

// app.use(express.urlencoded({extended: false}));

const dbURI = 'mongodb+srv://nodenetninja:nodenetninja@netninjablog.rfjoy.mongodb.net/node-todo-app?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(res=>{
        console.log("Connected to DB!")

        app.listen(3002, ()=>{
            console.log("Listening on port 3002...")
        })
    })
    .catch(e=>console.log(e));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.redirect('/todo');
})

app.use('/todo',homeRoute);

