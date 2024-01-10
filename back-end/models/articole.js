const {DataTypes, Sequelize}=require('sequelize');

module.exports=(sequelize) =>{
    const articole = sequelize.define('articole', {
        id_articol: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nume:{
            type:DataTypes.STRING,
            allowNull:false
        },
        descirere:{
            type:DataTypes.STRING,
            allowNull:false
        },
        id_autor:{
            type:DataTypes.INTEGER,
            allowNull:false
        }, 
        este_acceptat:{
            type: DataTypes.BOOLEAN
        }, 
        id_eveniment:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    })
    return articole;
}