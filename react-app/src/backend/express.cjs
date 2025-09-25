const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // TODO - credential
    database: 'test'
})

app.get('/mueslis', (req,res)=>{
    conn.connect(err => console.warn(err))
    //console.log('conn', conn)

    conn.query("SELECT id,name,price FROM mueslis",(err,result,fields)=>{
        if(err) console.warn(err)
        if(result){
            //console.log(results)
            //console.log(fields)

            res.status(200).json({err,result,fields})
        }
        else{
            res.status(403).json({err,})
        }
    })

    //res.send(200)
})

app.post('/mueslis', (req,res)=>{
    const {name, price} = req.body

    if(!name || price < 1) res.sendStatus(300)

    conn.connect(err => console.warn(err))

    conn.query("INSERT INTO mueslis (name, price) VALUES (?, ?)", [name, price], (err,results,fields)=>{
        if(err) {
            console.warn(err)
            res.sendStatus(500)
        } else {
            console.log('insertId', results.insertId)
            res.status(201).json({id: results.insertId, name, price})
        }
    })
    res.sendStatus(201)
})

app.get((err,req,res)=>{
    if(err){
        res.status(404).send("<h1 style='color: red'>404 not found</h1>")
    }
    else{
        res.status(200)
    }
})

const port = 3333

app.listen(port, err=>{
    console.log("fut", err)
})