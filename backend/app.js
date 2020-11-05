const express = require('express');
const app = express();
const bodyParser= require('body-parser');

app.use(bodyParser.json());


app.use(bodyParser.json());

const Livro = require('./model/livro');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wallace:wallace123@cluster0.jfwyd.mongodb.net/wallace?retryWrites=true&w=majority')
.then(()=>console.log("Conexão OK"))
.catch((e)=> console.log("Conexão falhou: "+ e));

const livros=[];

app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS');
    next();
   });

app.post('/api/livros',(req,res,next)=>{
    /*const livro = req.body;
    livros.push(livro);
    console.log(livro);*/
    const livro = new Livro({
        id: req.body.id,
        titulo: req.body.titulo,
        autor: req.body.autor,
        nmpag: req.body.nmpag
    });
    livro.save()
    .then((livroInserido)=>{
        console.log(`Inserção Ok: ${livroInserido}`) ;
        res.status(201).json({
        mensagem:'livro Inserido',
        idm: livroInserido._id
        });
    })
    .catch((error)=>{console.log(`Inserção NOK: ${error}`);
    res.status(404).json({
            mensagem: 'livro não foi Inserido'
        })
    })
});     

app.get('/api/livros',(req,res,next)=>{
    Livro.find()
    .then(documents =>{
       res.status(200).json({
           mensagem: 'tudo ok',
           livros: documents
       }) 
    })
    .catch((error)=>{
        console.log('busca falou: '+ error)
        res.status(404).json({
            mensagem: 'falhou',
            livros: []
        })
    })
});

app.delete('/api/livros/:idm',(req,res,next)=>{
    //console.log(req.params);
    Livro.deleteOne({_id: req.params.idm})
    .then((resultado)=>{
        console.log(resultado);
        res.status(200).end();
    })
    
        
});

module.exports = app;