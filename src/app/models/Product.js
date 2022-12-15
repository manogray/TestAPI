import uniqid from 'uniqid';

class Product {
    
    constructor(name, price, amount, category){
        this.id = uniqid();
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.category = category;
    }


}

export default Product;
