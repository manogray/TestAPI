import User from '../models/User';
import { users_list } from '../../database';

class UserController {

    async store(req, res){
        
        const emailDuplicate = await users_list.find((user) => {
            if(user.email == req.body.email){
                return true;
            }
        });

        if(emailDuplicate){
            return res.status(400).json({
                error: "This email is already registered"
            });
        }
        
        const newUser = new User(req.body.name, req.body.email, req.body.password);

        users_list.push(newUser);

        return res.json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        });
    }

    async index(req, res){
        
        var response = [];
        
        users_list.forEach((user) => {
            response.push({
                id: user.id,
                name: user.name,
                email: user.email
            });
        });

        return res.json(response);
    }
}

export default new UserController();
