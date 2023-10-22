import ProductRepository from "../repository/ProductRepository";
class ProductServiceImple {
    constructor() {
        this.productRepository = new ProductRepository();
    }
    findById(id) {
        const productList = this.productRepository.getProducts();
        let productWithId = null;
        for (const product of productList) {
            if (product.getId() === id) {
                productWithId = product;
                break;
            }
        }
        return productWithId;
    }
    findByName(name) {
        const productList = this.productRepository.getProducts();
        const resultList = [];
        for (const product of productList) {
            if (product.getName() === name) {
                resultList.push(product);
            }
        }
        return resultList;
    }
    findAll() {
        return this.productRepository.getProducts();
    }
    deleteById(id) {
        const productList = this.productRepository.getProducts();
        let productIndex = -1;
        productIndex = productList.findIndex(product => product.getId() === id);
        if (productIndex !== -1) {
            productList.splice(productIndex, 1);
            return true;
        }
        return false;
    }
    update(product) {
        throw new Error("Method not implemented.");
    }
    insert(product) {
        const productList = this.productRepository.getProducts();
        productList.push(product);
        return product;
    }
}
export default ProductServiceImple;
