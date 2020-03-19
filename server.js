const express = require("express");
const cors = require("cors");

const app = express();
const mysql = require("mysql");

const SELECT_ALL_MENU='SELECT * FROM hotdogs';


const connection = mysql.createConnection({
    connectionLimit: 50,
    user:'root',
    password: 'Nateschool29!',
    database:'hotdog',
    host:'127.0.0.1',
    port:'3306'
});

connection.connect(err=>{
    if(err){
        return err;
    }
});

// GET MENU //
app.use(cors());

app.get('/api/menu', (req,res)=>{
    
    connection.query(SELECT_ALL_MENU, (err, results)=>{
        if(err){
            return res.send(err)
        }else{
            res.json({
                data:results
            })
        }
    })
});

// INSERT INTO MENU //
app.get('/api/menu/add', (req,res)=>{
    const{price, title, descript}= req.query;
    const INSERT_INTO_MENUS = `INSERT INTO hotdogs(price, title, descript) VALUES ('${price}', '${title}','${descript}')`
    connection.query(INSERT_INTO_MENUS, (err, results)=>{
        if(err){
            return res.send(err)
        }else{
            return res.send('Successfuly Added Menu')
        }
    })
});

app.listen(4000, () =>{
    console.log(`Listening on port 4000`)
});