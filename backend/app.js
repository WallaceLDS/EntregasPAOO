const express = require('express');
const app = express();
const bodyParser= require('body-parser');

app.use(bodyParser.json());

const Livro = require('./model/livro');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wallace:wallace123@cluster0.jfwyd.mongodb.net/wallace?retryWrites=true&w=majority')
.then(()=>console.log("Conexão OK"))
.catch((e)=> console.log("Conexão falhou: "+ e));
/*app.use((req, res, next)=>{
    console.log("Chegou um requisição");
    next();
});*/
const livros=[
    { 
        id:1234,
        titulo: 'O Careca',
        autor: 'Rodrigo',
        nmpag: 255

    }
]

app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS');
    next();
   });

app.post('/api/clientes',(req,res,next)=>{
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
    .then((document)=>{
        console.log(`Inserção Ok: ${document}`) ;
        res.status(201).json({
        mensagem:'Cliente Inserido'
        });
    })
    .catch((error)=>{console.log(`Inserção NOK: ${error}`);
    res.status(404).json({
            mensagem: 'Cliente não foi Inserido'
        })
    })
});   

app.use('/api/clientes',(re,res,next)=>{
    //res.send("Hello from the back end cuzão");
    /*res.status(200).json({
        mensagem: 'tudo certo'
        ,livros:livros
    });*/
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

module.exports = app;