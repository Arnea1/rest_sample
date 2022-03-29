// application 설정
const express = require('express');
const checkUser = require('./util/validUser.js');

const app = express();
const port = 3000;


// use
//deprecate
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(express.urlencoded());
app.use(express.json());

// route
app.get('/', (req, res) =>
{
    res.send("get request");
})

app.post('/validUser', (req, res) =>
{
    console.log("post request");
    //res.send();
    //res.json();

    let response = {};
    const user_data = checkUser.validUserData(req.body.key, req.body.date);
    console.log(user_data);
    if (user_data)
    {
        res.json({ result: "success" });
    }
    else
    {
        res.json({ result: "fail" });
    }
})

app.listen(port, () =>
{
    console.log("rest api example port open");
})
