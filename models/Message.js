const {DataTypes}=require('sequelize');
const con=require('../connection/DbConnect');


const Message =con.sequelize.define('messages',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncreament:true
    },

    sender_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },

    receiver_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    
    message:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    type:{
        type:DataTypes.STRING,
        allowNull: false,
    },

    room_id:{
        type:DataTypes. INTEGER,
        allowNull: false,
    },

})