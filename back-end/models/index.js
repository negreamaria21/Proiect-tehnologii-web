const {DataTypes, Sequelize}=require('sequelize');
// AICI MOD DACA NU ITI VEDE FK SAU LEGATURILE BINE
//CAUTI PE CHAT 
const db=require("../config/db")

const ArticoleModel=require("./articole");
const AutoriModel=require("./autori");
const EvenimenteModel=require("./eveniment");
const OrganizatoriModel=require("./organizatori");
const ReviewerModel=require("./reviewer");

const articol= ArticoleModel(db, Sequelize);

const autor= AutoriModel(db, Sequelize)

const eveniment=EvenimenteModel(db, Sequelize);

const organizator=OrganizatoriModel(db, Sequelize)

const reviewer=ReviewerModel(db, Sequelize)


autor.hasMany(articol)
articol.belongsTo(autor)

eveniment.hasMany(articol)
articol.belongsTo(eveniment)

organizator.hasMany(eveniment)
eveniment.belongsTo(organizator)

eveniment.hasMany(reviewer)
reviewer.belongsTo(eveniment)

const juncReviewerArticole=db.define('juncReviewerArticole')
reviewer.hasMany(juncReviewerArticole)
juncReviewerArticole.belongsTo(reviewer)
articol.hasMany(juncReviewerArticole)
juncReviewerArticole.belongsTo(articol)

module.export={
    articol,
    autor,
    eveniment,
    organizator,
    reviewer, 
    connection:db
};

