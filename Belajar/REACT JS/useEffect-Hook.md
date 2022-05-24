useEffect ini bermanfaat untuk menjalankan suatu perintah atau fungsi setiap kali element di render. Contoh:

# Code 

        import { useState, useEffect } from "react";
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

          useEffect(() =>{
            console.log('Use Effect Running');
          })

          return (
            <div>
              <Header />
              <ProductList products={products} deleteProduct={deleteProduct}/>
            </div>
          );
        }

        export default App;
 jika di lihat di konsole, maka akan terdapat tulisan "Use Effect Running". Artinya fungsi useEffect ini dijalankan pertama kali pada saat page load.
Jika di klik delete, maka useEffect berjalan kembali terjadi rendering pada DOM nya. Artinya setiap kali terjadi rendering, maka useEffect Hook berjalan.


Jika ingin membuat useEffect berjalan hanya ketika load maka tambahkan empty array dalam kodingan.

# Code

        import { useState, useEffect } from "react";
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

          useEffect(() =>{
            console.log('Use Effect Running');
          }, []);

          return (
            <div>
              <Header />
              <ProductList products={products} deleteProduct={deleteProduct}/>
            </div>
          );
        }

        export default App;











