

class Product {
   
   private id: string;
   private name: string;
   private price: number;
   private static counter: number = 1;

   constructor( name: string, price: number ) {
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

   setName( name: string ) {
    this.name = name;
   }

   setPrice( price: number ) {
    this.price = price;
   }

   toString() {
    return `[Name: ${ this.name }, Price: ${ this.price }]`;
   }
  
}

export default Product;