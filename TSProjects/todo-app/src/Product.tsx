import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    id: Date.now().toString(),
    name: "",
    price: 0,
    description: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };

  const addTask = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      id: Date.now().toString(),
      name: "",
      description: "",
      price: 0,
    });
  };

  const handleDeleteProduct = (productId: string): void => {
     const remainingProducts = products.filter(product => product.id != productId);
     setProducts(remainingProducts);
  } 

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTask();
        }}
      >
        <div>
        <input
          type="text"
          name="name"
          placeholder="Name of the Product"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input type="text"
               name="price"
               value={newProduct.price}
               placeholder="Price of the Product"
               onChange={handleInputChange}
                />
        </div>
        <textarea name="description"
         id="" cols={20} rows={5}
          onChange={handleInputChange}></textarea>

          <button type="submit">Add Product</button>
      </form>
      <hr />
      <ul>
        {products.map(product => (
          <li>
             <div>
                 <span>{product.name}</span>
                 {product.price}
                 <p>{product.description}</p>
             </div>

             <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
