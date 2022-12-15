import Order from "../models/Order";
import { orders_list, products_list, users_list } from "../../database";

class OrderController {

    async store(req, res){
        const { user_id, products_id } = req.body;

        products_id.forEach((id) => {
            products_list.forEach((product) => {
                if(id == product.id){
                    product.amount = product.amount - 1;
                }
            });
    
        });
        const newOrder = new Order(user_id, products_id, "unpaid");
        
        orders_list.push(newOrder);

        return res.json(newOrder);
    }

    async checkout(req, res){
        const { order_id } = req.params;
        const { user_id, payment } = req.body;

        const userExists = users_list.find((user) => {
            if(user.id == user_id){
                return true;
            }
        });

        const orderExists = orders_list.find((order) => {
            if(order.id == order_id){
                return true;
            }
        });

        if(!userExists || !orderExists){
            return res.status(400).json({
                error: "user or order does not exists"
            });
        }

        if(payment != "credit" && payment != "debit"){
            return res.status(400).json({
                error: "payment method is not valid"
            });
        }

        var orderSelected = orders_list.find((order) => {
            if(order.id == order_id){
                return true;
            }
        });

        orderSelected.status = "paid";

        return res.json(orderSelected);

    }

    async index(req, res){
        return res.json(orders_list);
    }

    async show(req, res){
        const { order_id } = req.params;

        const orderSelected = orders_list.find((order) => {
            if(order.id == order_id){
                return true;
            }
        });

        if(!orderSelected){
            return res.status(400).json({
                error: "order does not exists"
            });
        }

        return res.json(orderSelected);
    }
};

export default new OrderController();
