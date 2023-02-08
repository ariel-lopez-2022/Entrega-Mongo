const BdProductManager = require("../dao/mongoManager/BdProductManager");
const Products = new BdProductManager();


const getProductsBd = async (req, res) => {
  const {limit: limite = ""} = req.query;
       const products = await Products.getProduct(limite);
       if (products){
          res.json(products)      
       }else{
        res.json(products)  

       }

     
};

const addProductBd = async (req, res)=>{
  const product = req.body;
    const newproduct = await Products.addProduct(product);
    if (newproduct){
      res.json(newproduct)    
    }else{
      res.json(newproduct)
          
    }
}


const getProductIdBd = async (req, res)=>{
  const id = req.params.pid 
  const getProductId = await Products.getProductId(id);
  if (getProductId){
    res.json(getProductId)      
  }else{
    res.json(getProductId)
  }



}

const UpdateProductBd = async (req, res)=>{
  const id = req.params.pid 
  const product = req.body
  const UpdateProductId = await Products.UpdateProduct(id, product);
  if (UpdateProductId){
     res.json(UpdateProductId)      
  }else{
    res.json(UpdateProductId)  
  }
  

}

const deleteProductBd = async (req, res)=>{
  const id = req.params.pid 
    const deleteproduct = await Products.DeleteProductId(id);
    if (deleteproduct){
      res.json(deleteproduct)      
    }else{
      res.json(deleteproduct)
    }
}

module.exports ={
    getProductsBd, 
    getProductIdBd,    
    addProductBd,
    UpdateProductBd,     
    deleteProductBd,
}
