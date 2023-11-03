import Quiro from "../models/Quiro.js";

class QuiroController {
    
    static createQuiro ({nome, endereco, data_nascimento, cpf, telefone, login , abq , senha}){
        return Quiro.create({nome, endereco, data_nascimento, cpf, telefone, login , abq , senha});
    }
}

export default QuiroController