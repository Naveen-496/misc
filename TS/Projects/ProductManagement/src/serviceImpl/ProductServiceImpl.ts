import ProductService from "../services/ProductService";
import ProductRepo from "../repository/ProductRepo";
import ProductRepository from "../repository/ProductRepository";
import Product from "../models/Product";


class ProductServiceImple implements ProductService {


  private productRepository: ProductRepo;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  findById(id: string): Product | null{
    
     const productList: Product[] = this.productRepository.getProducts();
     let productWithId: Product | null = null;

     for( const product  of productList ) {
        if( product.getId() === id ) {
          productWithId = product;
          break;
        }
     }
     return productWithId;
  }


  findByName(name: string): Product[] {
   
    const productList: Product[] = this.productRepository.getProducts();

    const resultList: Product[] = [];
    for( const product of productList ) {
       
       if( product.getName() === name ) {
         resultList.push( product );
       }
    }
   
     return resultList;
  }
  findAll(): Product[] {
    return this.productRepository.getProducts();
  }
  deleteById(id: string): boolean {
    const productList: Product[] = this.productRepository.getProducts();

    let productIndex = -1;
    productIndex = productList.findIndex( product => product.getId() === id );

    if( productIndex !== -1 ) {
      productList.splice( productIndex, 1 );
      return true;
    }
    return false;
    
  }
  update(product: Product): Product {
    throw new Error("Method not implemented.");
  }

  insert(product: Product): Product {
    
    const productList: Product[] = this.productRepository.getProducts();
    productList.push( product );
    return product;
  }
}


export default ProductServiceImple;