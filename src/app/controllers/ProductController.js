import Product from '../models/Product';
import { products_list } from '../../database';


class ProductController {
    async store(req, res){
        const { name, price, amount, category } = req.body;
        
        if(price <= 0){
            return res.status(400).json({
                error: "product price should be different and greater than zero"
            });
        }

        const newProduct = new Product(name, price, amount, category);

        products_list.push(newProduct);

        return res.json(newProduct);
    }

    async index(req, res){
        return res.json(products_list);
    }

    async show(req, res){
        const { product_id } = req.params;

        const searchedProduct = products_list.find((product) => {
            if(product.id == product_id){
                return true;
            }
        });

        if(searchedProduct){
            return res.json(searchedProduct);
        }else{
            return res.status(400).json({
                error: "product does not exists"
            });
        }
    }
}

export default new ProductController();
