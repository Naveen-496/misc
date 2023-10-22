import Product from "../models/Product";


interface ProductService {
   
   findById( id: string): Product | null;
   findByName( name: string): Product[];
   findAll(): Product[];
   deleteById( id: string): boolean;
   update( product: Product): Product | null;
   insert( product: Product): Product | null;
}

export default ProductService;