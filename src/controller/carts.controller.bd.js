const BdProductManager = require("../dao/mongoManager/BdProductManager");
const Products = new BdProductManager();
const BdCartManager = require("../dao/mongoManager/BdCartManager");
const Carts = new BdCartManager ()


const createCarts = async (req,res)=>{
    const cart = req.body 
    const Createcart = await Carts.CreateCarts(cart);
    if (!Createcart.error){
      res.json(Createcart)
              
   }else{
     res.json(Createcart)
   }
}


const bdgetCartId = async (req, res) => {
     const id = req.params.cid
     const cart = await Carts.getCarts(id);
     if (!cart.error){
        res.json(cart)
          
   }else{
        res.json(cart)   
          
  }

       
}

const addProductToCart = async (req, res)=>{
  const { cid, pid } = req.params;
  const product = await Products.getProductId (pid);
  
  if (!product.error){
    res.json(product)      
  } else{
     return {product}
         
  }
 
}


module.exports = {
    createCarts,
    bdgetCartId,
    addProductToCart,
   
}
