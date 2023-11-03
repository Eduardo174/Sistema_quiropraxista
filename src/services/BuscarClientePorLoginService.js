import pool from "../config/database.js";

class BuscarClientePorLoginService{
    static async execute(login){
        const sql = 'SELECT * FROM cliente WHERE login = $1'
        const livro = await pool.query(sql, [login])
        return livro.rows
    }
}

export default BuscarClientePorLoginService