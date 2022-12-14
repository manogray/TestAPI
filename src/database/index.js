import User from '../app/models/User';

var user1 = new User("Jose", "jose12@gmail.com", "12345678");
var user2 = new User("Maria", "maria@gmail.com", "12345678");
var user3 = new User("Roberto", "roberto@gmail.com", "12345678");

var users_list = [user1, user2, user3];

export default users_list; 