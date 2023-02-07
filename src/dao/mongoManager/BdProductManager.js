const productModel = require('../models/products.model')

class BdProductManager {
	constructor() {
		this.products = []
	}

	

	getProduct = async (limite) => {
        console.log(limite)
		try{  

            if (limite){
                const products = await productModel.find().limit(limite);
                 return products

            } else {
                const products = await productModel.find();
                 return products
            }
            
           } catch (error) {
              return {msg:"Error al Obtener Productos"}    
             
           }   
            
	}

    addProduct = async (product) => {
	  try {
        const newproduct = await productModel.create(product);
        return newproduct
        
      } catch (error) {
        return {msg:"Error al Crear Producto"}
       
      }   
    }

    getProductId = async (id) =>{
        try {
            const getproductId = await productModel.findById(id);
            return  getproductId

          } catch (error) {
            return {msg:"Error al Buscar Producto"}
          }   


    }

    UpdateProduct = async (id, product) =>{
        const {title, description, code, price, status, stock, category, thumbnail} = product 
        try {
            const UpdateProduct = await productModel.findByIdAndUpdate(id, {title, description, code, price, status, stock, category, thumbnail});
            return UpdateProduct
                  
          } catch (error) {
            return {msg:"Error al Actualizar Producto"}
          }   

    }

    DeleteProductId = async (id)=>{
        try {
            const deleteproduct = await productModel.findByIdAndDelete(id);
            return deleteproduct

          } catch (error) {

            return {msg:"Error al Actualizar Producto"}
          }   

    }



}

module.exports = BdProductManager
