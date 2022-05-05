// application 설정
const express = require('express');
const validator = require('./util/validator.js');
const { Pool, Client } = require('pg');

const app = express();
const port = 3000;

const pg_opt = {
    user:'mopicadmin',
    host:'mopicdevsqldb-dy.postgres.database.azure.com',
    database:'tutorialdb',
    password:'popup3d*',
    port:5432,
    ssl:true
}
const pg_pool = new Pool(pg_opt);
//const pg_client = new Client(connectionStr);

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
    pg_pool.connect(err => {
        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log("pool 연결성공");

            // READ
            var query_str = "SELECT * FROM customers";
            //var query_str = "SELECT * FROM customers WHERE customer_id = 1";
            //var query_str = "SELECT customer_id, name FROM customers WHERE customer_id = 1";

            // UPDATE
            //var query_str = "INSERT INTO customers (customer_id, name, location, email) VALUES (5, 'asd', 'zxc', 'qwe')";
            //var query_str = "UPDATE customers SET name = 'fgh' WHERE customer_id = 5";

            // DELETE
            //var query_str = "DELETE FROM customers WHERE customer_id = 5";

            pg_pool.query(query_str, (err, res) =>{
                if (err)
                {
                    console.log("쿼리 에러");
                    console.log(err);
                }
                console.log(res)
            })
        }
    });
});
