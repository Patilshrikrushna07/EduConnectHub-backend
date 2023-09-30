const {DataTypes}=require('sequelize');
const con =require('../connection/DbConnect');



const Room =con.sequelize.define('rooms',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncreament:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    }
})