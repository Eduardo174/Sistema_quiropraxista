import Client from "../models/client.js";

class ClientController {
    
    static createClient ({nome,endereco,data_nascimento,cpf,telefone,login , senha}){
        return Client.create({nome,endereco,data_nascimento,cpf,telefone,login , senha});
    }
}

export default ClientController