const express=require('express')
const app=express()
const sequelize=require('./model/user')
const bodyParser=require('body-parser')
const save=require('./route/save')
const cors=require('cors')
app.use(cors())
app.use(bodyParser.json({extended:false}))
app.use('/save',save)
sequelize
    .sync()
    .then((result)=>{
        //console.log(result)
        app.listen(3000)
    })
    .catch(err=>{
        console.log(err)
    })
