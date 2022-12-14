import users_list from '../../database';


class SessionController {
    async store(req, res){
        
        const { login, password } = req.body;

        const user_logged = await users_list.find((user) => {
            if((user.email == login) && (user.password == password)){
                return true;
            }
        });

        if(!user_logged){
            return res.status(401).json({
                error: "email or password does not match"
            });
        }

        return res.json({
            id: user_logged.id,
            name: user_logged.name,
            email: user_logged.email
        });
    }
}

export default new SessionController();
