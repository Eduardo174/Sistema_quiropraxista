import { Router } from "express";
import QuiroController from "../controllers/QuiroController.js";


const QuiroRouter = Router();

QuiroRouter.post('/', async (req,res)=>{
    
    const {nome, endereco, data_nascimento, cpf, telefone, login , abq,senha} = req.body;
    await QuiroController.createQuiro({nome, endereco, data_nascimento, cpf, telefone, login , abq,senha})
    
    try {
        return res.send({message:'Quiropraxista cadastrado com sucesso'})
    } catch (error) {
        return res.send({message:'Não foi possivel realizar o cadastro' })
    }
})

export default QuiroRouter;