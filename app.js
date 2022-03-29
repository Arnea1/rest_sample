// application 설정
const express = require('express');
const validator = require('./util/validator.js');

const app = express();
const port = 3000;

//use
//app.use(express.urlencoded());
app.use(express.json());

// route
app.get('/', (req, res) =>
{
    //res.send("get request");
});

app.get('/validUser', (req, res) =>
{
    res.send("올바르지 않은 요청방식입니다.");
});

app.post('/validUser', (req, res) =>
{
    //res.send();
    //res.json();
    console.log(req);
    try
    {
        const user_data = validator.validUser(req.body.user, req.body.key);

        //err throw
        //에러 발생 함수
        //const user_data2 = validator.validUser2(req.body.user, req.body.key);
        //throw "error";

        //모듈에 없는 함수
        //const user_data3 = validator.validUser3(req.body.user, req.body.key);

        res.json(user_data);
    }
    catch(e)
    {
        res.json({user:req.body.user, status:"FAILED", reason:""});
    }
});

app.listen(port, () =>
{
    console.log("rest api example port open");
});
