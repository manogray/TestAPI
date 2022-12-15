import uniqid from 'uniqid';

class Order {
    
    constructor(user_id, products_id, status){
        this.id = uniqid();
        this.user_id = user_id;
        this.products_id = products_id;
        this.status = status;
    }


}

export default Order;
