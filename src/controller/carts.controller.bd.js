const BdCartManager = require("../dao/mongoManager/BdCartManager");
const Carts = new BdCartManager ('../../asets/product.json')


const createCarts = async (req,res)=>{
    const cart = req.body 
    const Createcart = await Carts.CreateCarts(cart);
    if (!Createcart.error){
      return res.json({
        msg: 'Carrito Creado',
        playload: Createcart,
     });      
   }else{
    return res.json({
      msg: 'No Se Creo Carrito',
      
   });      

   }



}


const bdgetCartId = async (req, res) => {
     const id = req.params.cid
     const cart = await Carts.getCarts(id);
     if (!cart.error){
      return res.json({
        msg: 'Carrito Encontrado',
        playload: cart,
     });      
   }else{
    return {
      msg: 'No se Encontro Carrito'}
      
          
  }

       
}

const addProductToCart = async (req, res)=>{
    const {cid,pid} = req.params
    try {
      const carts= await modelCarts.findById(cid);
      const product =  await modelProducts.findById(pid)
      console.log(carts)
      
    } catch (error) {
      return res.status(500).json({
        msg:'error',
        playload: "Error al acceder a Carrito",
      })
    }
}


module.exports = {
    createCarts,
    bdgetCartId,
    addProductToCart,
   
}
