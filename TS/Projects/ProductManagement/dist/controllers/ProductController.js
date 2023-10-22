var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ProductServiceImple from "../serviceImpl/ProductServiceImpl";
import Product from "../models/Product";
import readline from "readline";
class ProductController {
    constructor() {
        this.productService = new ProductServiceImple();
    }
    addProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            let productName = "";
            let productPrice = 0;
            const askProductName = () => {
                return new Promise((resolve) => {
                    rl.question("Enter the product name: ", (name) => {
                        productName = name;
                        resolve();
                    });
                });
            };
            const askProductPrice = () => {
                return new Promise((resolve) => {
                    rl.question("Enter the product price: ", (price) => {
                        if (typeof Number(price) === "number") {
                            productPrice = Number(price);
                            resolve();
                        }
                        else {
                            console.log("Please enter a valid price.");
                            askProductPrice(); // Ask again for valid price
                        }
                    });
                });
            };
            yield askProductName();
            yield askProductPrice();
            rl.close();
            const product = new Product(productName, productPrice);
            this.productService.insert(product);
        });
    }
    getAllProdcuts() {
        return this.productService.findAll();
    }
    findProductByName(name) {
        const result = this.productService.findByName(name);
        if (result.length > 0) {
            this.printProducts(result);
        }
        else {
            console.log("No Procucts found by that name: " + name);
        }
    }
    printProducts(productList) {
        for (const product of productList) {
            console.log(product.toString());
        }
    }
}
const productController = new ProductController();
productController.addProduct();
const result = productController.getAllProdcuts();
productController.printProducts(result);
