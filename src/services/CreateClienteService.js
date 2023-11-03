import pool from "../config/database.js";

class CreateClienteService {
    static async execute({ nome, endereco, data_nascimento, cpf, telefone, login, senha }) {
        const sql = 'INSERT INTO cliente (nome_completo, endereco, data_nascimento, cpf, telefone, login, senha) VALUES ($1, $2, $3, $4, $5, $6 , $7) RETURNING *';
        const values = [nome, endereco, data_nascimento, cpf, telefone, login, senha];

        try {
            const result = await pool.query(sql, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
}

export default CreateClienteService;
