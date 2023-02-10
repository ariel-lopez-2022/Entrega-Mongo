const BdProductManager = require("../dao/mongoManager/BdProductManager");
const Products = new BdProductManager();
const BdCartManager = require("../dao/mongoManager/BdCartManager");
const Carts = new BdCartManager ()




const bdgetCartId = async (req, res) => {
     const id = req.params.cid
     const cart = await Carts.getCartsId(id);
     if (!cart){
      return res.status(400).json({
        msg:"Carrito Inexistente",
        ok:false,
       })  
          
   }else{
        res.json(cart)   
          
  }

}

const addProductToCart = async (req, res)=>{
  const { cid, pid } = req.params;
  const product = await Products.getProductId(pid);
  
  if (!product){
    
    return res.status(400).json({
      msg:"Producto no encontrado",
      ok:false,
     })  
    }
    const Cart = await Carts.getCartsId (cid);
    
     if (!Cart){
      const newCart = {
         priceTotal: product.price,
         quantityTotal: 1,
         products:[{id:product.id, title:product.title, description:product.description, price:product.price, quantity:1}] 
       }
      const CreateCart = await Carts.addProductToCarts (newCart);
       return res.status(200).json({
         msg:"Carrito Creado",
         cart:CreateCart,
        })  

      }
    
      const findProductTocart = Cart.products.find((prod)=> prod.id === pid) 
     
      if(!findProductTocart){
        Cart.products.push({id:product.id, title:product.title, description:product.description, price:product.price, quantity:1})
        Cart.quantityTotal = Cart.quantityTotal + 1
        const total = Cart.products.reduce((acumulador,total)=> acumulador + total.price,0)
        Cart.priceTotal = total
        const cartToUpdate = await Carts.updateToCart(Cart)
        return res.status(200).json({
          msg:"Producto Agregado ",
          cart:cartToUpdate,
         })  
         
      }else{
        findProductTocart.quantity++
        Cart.quantityTotal = Cart.quantityTotal + 1
        const total = Cart.products.reduce((acumulador,total)=> acumulador + (total.price*total.quantity),0)
        Cart.priceTotal = total
        const cartToUpdate = await Carts.updateToCart(Cart)
        return res.status(200).json({
          msg:"Producto Agregado ",
          cart:cartToUpdate,
         })  
      }
       

      
             


}


module.exports = {
    bdgetCartId,
    addProductToCart,
    
}
