const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/index');
const cors = require('cors');//cross origin resourse sharing--middleware
const bodyParser = require('body-parser');

const port = process.env.PORT  || 2020;
const host ='0.0.0.0';
const app=express();

//pass the port, host to index-- / means all the request are routing to the routes

app.use(cors());
app.options('*',cors());

app.use(bodyParser.json());

app.use('/', routes);




//to connect to the mongo data base...(first param = url)..

mongoose.connect('mongodb+srv://Puja:mongoDB2021@cluster1.9kkzx.mongodb.net/testDB?retryWrites=true&w=majority',
 { useNewUrlParser: true , useUnifiedTopology: true })
.then(res =>{
 //if the database gets connected the it gonna execute
 app.listen(port, host , ()=>{
    console.log(`server is running on..." ${host}: ${port}`);
});

 }).catch (err =>{console.log(err)
})



