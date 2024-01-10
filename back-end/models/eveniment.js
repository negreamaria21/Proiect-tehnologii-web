const {DataTypes, Sequelize}=require('sequelize');

module.exports=(sequelize) =>{
    return sequelize.define('evenimente', {
       id_eveniment: {
             type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nume:{
            type:DataTypes.STRING,
            allowNull:false
        },
        id_organizator:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    })
}