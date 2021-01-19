const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello world!");
    res.end();
});

app.post("/add/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1+num2;
    console.log(num2)
    let status = "success";
    let message = "the sum of given two numbers";
    if(num1 < -1000000 || num2 < -1000000 || num1 > 1000000 || num2 > 1000000 || sum > 1000000 || sum < -1000000 || isNaN(num1) || isNaN(num2)){
        status = "error";
        if(num1 < -1000000 || num2 < -1000000 || sum < -1000000)
            message = "Underflow";
        if(num1 > 1000000 || num2 > 1000000 || sum > 1000000)
            message = "Overflow";
        if(isNaN(num1) || isNaN(num2))
            message = "Invalid data types";
    }
    res.send({
        status,
        message,
        sum
        })
})

app.post("/sub", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const difference = num1 - num2;
    console.log(num2)
    let status = "success";
    let message = "the difference of given two numbers";
    if(num1 < -1000000 || num2 < -1000000 || num1 > 1000000 || num2 > 1000000 || difference > 1000000 || difference < -1000000 || isNaN(num1) || isNaN(num2)){
        status = "error";
        if(num1 < -1000000 || num2 < -1000000 || difference < -1000000)
            message = "Underflow";
        if(num1 > 1000000 || num2 > 1000000 || difference > 1000000)
            message = "Overflow";
        if(isNaN(num1) || isNaN(num2))
            message = "Invalid data types";
    }
    res.send({
        status,
        message,
        difference
        })
})

app.post("/multiply/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = num1*num2;
    console.log(num2)
    let status = "success";
    let message = "The product of given numbers";
    if(num1 < -1000000 || num2 < -1000000 || num1 > 1000000 || num2 > 1000000 || result > 1000000 || result < -1000000 || isNaN(num1) || isNaN(num2)){
        status = "error";
        if(num1 < -1000000 || num2 < -1000000 || result < -1000000)
            message = "Underflow";
        if(num1 > 1000000 || num2 > 1000000 || result > 1000000)
            message = "Overflow";
        if(isNaN(num1) || isNaN(num2))
            message = "Invalid data types";
    }
    res.send({
        status,
        message,
        result
        })
})

app.post("/divide/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const result = num1/num2;
    console.log(num2)
    let status = "success";
    let message = "The division of given numbers";
    if(num1 < -1000000 || num2 < -1000000 || num1 > 1000000 || num2 > 1000000 || num2 === 0 || result > 1000000 || result < -1000000 || isNaN(num1) || isNaN(num2)){
        status = "error";
        if(num1 < -1000000 || num2 < -1000000 || result < -1000000)
            message = "Underflow";
        if(num1 > 1000000 || num2 > 1000000 || result > 1000000)
            message = "Overflow";
        if(isNaN(num1) || isNaN(num2))
            message = "Invalid data types";
        if(num2 === 0)
            message = "Cannot divide by zero";
    }
    res.send({
        status,
        message,
        result
        })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;