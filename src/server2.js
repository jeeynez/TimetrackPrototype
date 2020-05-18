const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.listen(8080)

const connection = mysql.createConnection({

    host: "aaggtiij84mfy9.chdhsgvso1pe.us-east-2.rds.amazonaws.com",
    user: "username",
    password: "password",
    port: 3306

})

connection.connect(err=>{
    if (err) {
        console.log('Connected!!! Yahoo')

    }
})