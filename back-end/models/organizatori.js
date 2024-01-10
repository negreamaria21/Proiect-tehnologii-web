const {DataTypes, Sequelize}=require('sequelize');

module.exports=(sequelize) =>{
    return sequelize.define('organizatori', {
        id_organizator: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nume:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        parola:{
            type:DataTypes.STRING,
            allowNull:false
        }

    })
}