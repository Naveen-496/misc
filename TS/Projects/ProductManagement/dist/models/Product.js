class Product {
    constructor(name, price) {
        this.id = "PROD" + Product.counter++;
        this.name = name;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
    toString() {
        return `[Name: ${this.name}, Price: ${this.price}]`;
    }
}
Product.counter = 1;
export default Product;
