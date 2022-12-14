import uniqid from 'uniqid';

class User {
    
    constructor(name, email, password){
        this.id = uniqid();
        this.name = name;
        this.email = email;
        this.password = password;
    }


}

export default User;
