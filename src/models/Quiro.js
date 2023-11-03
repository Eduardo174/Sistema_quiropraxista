import CreateQuiroService from "../services/CreateQuiroService.js"
import BuscarQuiroPorAbq from "../services/BuscarQuiroPorAbq.js"
import bcrypt from "bcrypt";

class Quiro {

    static async create({nome, endereco, data_nascimento, cpf, telefone, login , abq , senha}){
        const hashedSenha = await bcrypt.hash(senha,10); 
        
        CreateQuiroService.execute({nome, endereco, data_nascimento, cpf, telefone, login , abq , senha: hashedSenha})

        const Quiro = await this.findByabq(abq)
        return Quiro
    }

    static findByabq(abq){
        return BuscarQuiroPorAbq.execute(abq)
    }
}

export default Quiro