import { Router } from "express";
import ClientController from "../controllers/ClientController.js";


const ClientRouter = Router();
console.log("cheguei");

ClientRouter.post('/', async (req,res)=>{
    console.log("cheguei");
    const {nome,endereco,data_nascimento,cpf,telefone,login,senha} = req.body;
    await ClientController.createClient({nome,endereco,data_nascimento,cpf,telefone,login,senha})
    
    try {
        return res.send({message:'Cliente cadastrado com sucesso'})
    } catch (error) {
        return res.send({message:'Não foi possivel realizar o cadastro' })
    }
})

export default ClientRouter;