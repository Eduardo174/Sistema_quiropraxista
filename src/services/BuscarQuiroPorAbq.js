import pool from "../config/database.js";

class BuscarQuiroPorAbq{
    static async execute(abq){
        const sql = 'SELECT * FROM profissional WHERE abq = $1'
        const livro = await pool.query(sql, [abq])
        return livro.rows
    }
}

export default BuscarQuiroPorAbq