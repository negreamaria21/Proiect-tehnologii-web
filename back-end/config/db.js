const {Sequelize}=require('sequelize');

const db=new Sequelize(
    'proiect_web',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'sqlite',
        storage: '../db.sqlite',
        logging: false,
        define: {
            charset: "utf8",
            collate: "utf8_general_ci",
        }    
      }
);


db.sync()
.then(() => { 
    console.log('Models successfully (re)created'); 
})
.catch((err) => { 
    console.warn('Error creating models');
    console.warn(err);
}); 


module.exports=db;