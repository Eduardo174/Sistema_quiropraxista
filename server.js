import express from "express";
import router from "./src/routes/index.js"
import db from "./src/config/database.js";
import cors from 'express';

db.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Conectado ao banco de dados");
    }
})

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(express.json())
app.use(router);

app.listen(port, () => console.log(`Servidor localhost:${port} iniciado`));