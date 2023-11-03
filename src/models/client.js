import CreateClienteService from "../services/CreateClienteService.js"
import BuscarClientePorLoginService from "../services/BuscarClientePorLoginService.js"
import bcrypt from 'bcrypt'

class Client {

    static async create({nome,endereco,data_nascimento,cpf,telefone,login,senha}){
        const hashedSenha = await bcrypt.hash(senha, 10)
        CreateClienteService.execute({nome,endereco,data_nascimento,cpf,telefone,login,senha:hashedSenha})

        const client = await this.findByLogin(login)
        return client
    }

    static findByLogin(login){
        return BuscarClientePorLoginService.execute(login)
    }
}

export default Client