import Product from "../models/Product";
class ProductRepository {
    constructor() {
        this.productList = this.createProducts();
    }
    createProducts() {
        const p1 = new Product("Fan", 2900);
        const p2 = new Product("Table", 1600);
        const p3 = new Product("TV", 35000);
        const p4 = new Product("Fridge", 15000);
        const p5 = new Product("Washing Machine", 30000);
        const p6 = new Product("Shoes", 2000);
        const p7 = new Product("Bag", 1500);
        return [p1, p2, p3, p4, p5, p6, p7];
    }
    getProducts() {
        return this.productList;
    }
}
export default ProductRepository;
