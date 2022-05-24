Props merupakan cara untuk mengirimkan data dari komponen induk ke komponen anak, atau juga bisa menggunakan props sebagai even untuk mengirimkan komponen anak ke komponen induk. contohnya, buat file lg di component bernama "ProductList.js".

# Code App.js

        import { useState } from "react";
        import Header from "./Components/Header";
        import ProductList from "./Components/ProductList";

        function App() {
          const [products, setProducts] = useState([
            { id: 1, title: 'product 1', price: 899 },
            { id: 2, title: 'product 2', price: 769 },
            { id: 3, title: 'product 3', price: 989 },
            { id: 4, title: 'product 4', price: 871 },
            { id: 5, title: 'product 5', price: 459 },
          ]);

          const deleteProduct = (productId) => {
            const newProducts =products.filter(product => product.id !== productId);
            setProducts(newProducts);
          }

          return (
            <div>
              <Header />
              <ProductList products={products} deleteProduct={deleteProduct}/>
            </div>
          );
        }

        export default App;

# Code ProductList.js

        const ProductList = ({ products, deleteProduct }) => {
          return (
            <div>
            <ul>
                { products.map((product) => (
                  <li key={product.id}>{ product.title } - { product.price }
                  <button onClick={() => deleteProduct(product.id)}>Delete</button>
                  </li>
                ))}
            </ul>
            </div>
          )
        }

        export default ProductList

Di dalam browser, akan menampilkan button delete. Jika button "Delete" di klick, maka productList yang di delete akan hilang.






