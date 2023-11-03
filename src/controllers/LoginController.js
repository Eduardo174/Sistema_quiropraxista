import AuthService from "../services/AuthService.js";

class LoginController{
    static async login(req,res){
        const{login , senha} = req.body;

        try {
            const token = await AuthService.authenticate({login ,senha})
            res.json({token})
        } catch (error) {
            res.status(401).json({message:'Crendenciais inválidas'});
        }
    }
}

export default LoginController;