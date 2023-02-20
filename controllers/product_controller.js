const Product = require('../models/product');
// create a product
module.exports.create = async (req,res) => {
    try{
        console.log("Before adding into the database *****");
        const product = await Product.create(req.body);
        console.log(req.body);
        if(product){
            return res.status(200).json({data:{
                product:product
            }});
        }
        
        return res.status(400).json({message:"Some error"})
        
        
    }
    catch(err){
        console.log(err);
        return res.json(500,{
            message:"Internal server error"
        });
    }
}
//get all the products
module.exports.get = async (req,res) => {
    try{
        const products = await Product.find({});
        if(products){
            return res.status(200).json({data:{
                products:products
            }});
        }
        return res.status(400).json({message:"Some error"})
    }
    catch(err){
        console.log(err);
        return res.json(500,{
            message:"Internal server error"
        });
    }
}
// deleting the product using id
module.exports.delete = async (req,res) => {
    try{
        let product = await Product.findById(req.params.id);
        if(product){
            product.remove();
            return res.json(200, {
                message: "Product deleted"
            });
        }
        return res.json(401, {
            message: "You cannot delete this post!"
        });
    }
    catch(err){
        console.log(err);
        return res.json(500,{
            message:"Internal server error"
        });
    }
}
// updating the product using id and the name
module.exports.update = async (req,res) => {
    try{
        console.log(req.query);
        console.log(req.params.id);
        const product = await Product.findById(req.params.id);
        if(product){
            const updated = await Product.updateOne({_id:req.params.id},{
                $set:{
                    quantity:req.query.number,
                }
            })
            if(updated){
                return res.status(200).json({data:{
                    product:product
                },message:"updated successfully"});
            }
            return res.json(401, {
                message: "cannot update this product"
            });
        }
    }
    catch(err){
        console.log(err);
        return res.json(500,{
            message:"Internal server error"
        });
    }
}
