import ProductRepo from "./ProductRepo";
import Product from "../models/Product";

class ProductRepository implements ProductRepo {
  private productList: Product[];
  constructor() {
    this.productList = this.createProducts();
  }

  createProducts() {
    const p1: Product = new Product("Fan", 2900);
    const p2: Product = new Product("Table", 1600);
    const p3: Product = new Product("TV", 35000);
    const p4: Product = new Product("Fridge", 15000);
    const p5: Product = new Product("Washing Machine", 30000);
    const p6: Product = new Product("Shoes", 2000);
    const p7: Product = new Product("Bag", 1500);

    return [p1, p2, p3, p4, p5, p6, p7];
  }

  getProducts() {
    return this.productList;
  }
}

export default ProductRepository