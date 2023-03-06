const Sequelize=require('sequelize')
const sequelize=require('../util/database')
const Users=sequelize.define('userdata',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:Sequelize.STRING,
    phone:Sequelize.STRING,
    email:Sequelize.STRING
})
module.exports=Users