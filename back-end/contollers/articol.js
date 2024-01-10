const articolDB=require("../models").articol;
const autorbDB=require("../models").autor;
const evenimentDB=require("../models").eveniment;

const controller={
    addArticol:async(req, res)=>{
        const articol={
            nume:req.body.nume,
            descirere:req.body.descirere,
            id_autor:req.body.id_autor,
            este_acceptat:req.body.este_acceptat,
            id_eveniment:req.body.id_eveniment
        };

        console.log(articol);

        let errors={};
        
        if(Object.keys(errors).length===0){
            articolDB.create(articol)
            .then(()=> {
                res.status(201).send({
                    message:"Articolul a fost adaugat cu succes"
                });
            })
            .catch(()=>
            {
                res.status(500).send({message:"Server error!"})
            })
        }
        else{
            res.status(400).send(errors);
        }
    },

}
module.exports=controller;