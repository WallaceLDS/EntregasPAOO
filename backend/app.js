const express = require('express');
const app = express();
const bodyParser= require('body-parser');

app.use(bodyParser.json());

/*app.use((req, res, next)=>{
    console.log("Chegou um requisição");
    next();
});*/
const livros=[
    {
        id:'1',
        titulo: 'Harry Potter',
        autor:'Ele Mesmo',
        nmpg:'800'
    },
    {
        id:'2',
        titulo: 'O Cortiço',
        autor:'O pedreiro',
        nmpg:'280'
    }
]

app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS');
    next();
   });

app.post('/api/clientes',(req,res,next)=>{
    const livro = req.body;
    livros.push(livro);
    console.log(livro);
    res.status(201).json({
        mensagem:'Cliente Inserido'
    });
});   

app.use('/api/clientes',(re,res,next)=>{
    //res.send("Hello from the back end cuzão");
    res.status(200).json({
        mensagem: 'tudo certo'
        ,livros:livros
    });
});

module.exports = app;