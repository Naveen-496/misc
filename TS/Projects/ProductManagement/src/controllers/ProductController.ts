import ProductService from "../services/ProductService";
import ProductServiceImple from "../serviceImpl/ProductServiceImpl";
import Product from "../models/Product";
import readline from "readline";

class ProductController {
  private productService: ProductService;
  constructor() {
    this.productService = new ProductServiceImple();
  }

  async addProduct() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    let productName: string = "";
    let productPrice: number = 0;
  
    const askProductName = () => {
      return new Promise<void>((resolve) => {
        rl.question("Enter the product name: ", (name: string) => {
          productName = name;
          resolve();
        });
      });
    };
  
    const askProductPrice = () => {
      return new Promise<void>((resolve) => {
        rl.question("Enter the product price: ", (price: string) => {
          if (typeof Number(price) === "number") {
            productPrice = Number(price);
            resolve();
          } else {
            console.log("Please enter a valid price.");
            askProductPrice(); // Ask again for valid price
          }
        });
      });
    };
  
    await askProductName();
    await askProductPrice();
  
    rl.close();
  
    const product: Product = new Product(productName, productPrice);
    this.productService.insert(product);
  }
  

  getAllProdcuts() {
    return this.productService.findAll();
  }

  findProductByName(name: string) {
    const result: Product[] = this.productService.findByName(name);

    if (result.length > 0) {
      this.printProducts(result);
    } else {
      console.log("No Procucts found by that name: " + name);
    }
  }

  printProducts(productList: Product[]): void {
    for (const product of productList) {
      console.log(product.toString());
    }
  }
}

const productController: ProductController = new ProductController();
 productController.addProduct();
const result: Product[] = productController.getAllProdcuts();
productController.printProducts( result );
