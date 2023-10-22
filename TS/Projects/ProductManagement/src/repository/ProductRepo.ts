import Product from "../models/Product";
interface ProductRepo {
   
   getProducts: () => Product[];
}

export default ProductRepo;