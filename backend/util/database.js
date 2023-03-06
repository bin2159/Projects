const Sequelize=require('sequelize')
const sequelize=new Sequelize('new_schema','root','2159',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize
