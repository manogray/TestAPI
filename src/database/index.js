import User from '../app/models/User';
import Product from '../app/models/Product';

var user1 = new User("Jose", "jose12@gmail.com", "12345678");
var user2 = new User("Maria", "maria@gmail.com", "12345678");
var user3 = new User("Roberto", "roberto@gmail.com", "12345678");

var product1 = new Product("Máquina de Cortar Cabelo Cadence", 39.9, 100, "Beleza");
var product2 = new Product("Garrafa Termica 590ml Azul", 176, 400, "Acessórios");
var product3 = new Product("Echo Dot 4 geração", 399, 80, "Eletrônicos");
var product4 = new Product("Samsung Galaxy A13", 1209, 110, "Eletrônicos");
var product5 = new Product("Tenis Mizuno Wave Invictus 3", 694.99, 244, "Vestuário");
var product6 = new Product("Capacete Mixs MX2 Carbon 56", 130.10, 55, "Automotivo");
var product7 = new Product("Samsung Galaxy Note 20", 4399, 86, "Eletrônicos");
var product8 = new Product("Tenis Air Jordan X", 2199.89, 12, "Vestuário");
var product9 = new Product("Escova de Cabelo", 59.90, 213, "Beleza");
var product10 = new Product("Regata NBA Nike Portland Trail Blazers", 649.99, 154, "Esporte");
var product11 = new Product("JBL TWS Race", 350.9, 129, "Eletrônicos");
var product12 = new Product("Balança Digital até 150Kg", 205.9, 114, "Acessórios");

var users_list = [user1, user2, user3];
var products_list = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12];
var orders_list = [];

export { users_list, products_list, orders_list };
