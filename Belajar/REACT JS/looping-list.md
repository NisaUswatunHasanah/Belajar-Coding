import { useState } from "react";
import Header from "./Components/Header";

        function App() {
          const [products, setProducts] = useState([
            { id: 1, title: 'product 1', price: 899 },
            { id: 2, title: 'product 2', price: 769 },
            { id: 3, title: 'product 3', price: 989 },
            { id: 4, title: 'product 4', price: 871 },
            { id: 5, title: 'product 5', price: 459 },
          ]);

          return (
            <div>
              <Header />
              <ul>
                { products.map((product) => (
                  <li key={product.id}>{ product.title } - { product.price }</li>
                ))}
              </ul>
            </div>
          );
        }

        export default App;

maka dalam browser akan menampilkan.


        Ini Adalah Components Header

            product 1 - 899
            product 2 - 769
            product 3 - 989
            product 4 - 871
            product 5 - 459







