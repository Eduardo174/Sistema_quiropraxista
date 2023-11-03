import pool from "../config/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
  static async authenticate({ login, senha }) {
    try {
      // Consulta SQL para buscar o usuário pelo login
      const query = 'SELECT * FROM profissional WHERE login = $1';
      const result = await pool.query(query, [login]);

      // Se o usuário não foi encontrado, retorna null
      if (result.rows.length === 0) {
        throw new Error('Usuário não encontrado');
      }

      // Verifica se a senha fornecida corresponde ao hash armazenado
      const user = result.rows[0];
      const senhaCorreta = await bcrypt.compare(senha, user.senha);

      if (!senhaCorreta) {
        throw new Error('Credenciais inválidas');
      }

      // Gera e retorna um token JWT se as credenciais estiverem corretas
      const token = jwt.sign({ login }, '790533@Edu!', { expiresIn: '1h' });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
