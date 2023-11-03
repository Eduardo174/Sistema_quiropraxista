import pool from "../config/database.js";

class CreateQuiroService {
    static async execute({ nome, endereco, data_nascimento, cpf, telefone, login , abq,senha }) {
        const sql = 'INSERT INTO profissional (nome_completo, endereco, data_nascimento, cpf, telefone, login , abq,senha) VALUES ($1, $2, $3, $4, $5, $6 , $7 , $8) RETURNING *';
        const values = [nome, endereco, data_nascimento, cpf, telefone, login,abq,senha];

        try {
            const result = await pool.query(sql, values);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
}

export default CreateQuiroService;
