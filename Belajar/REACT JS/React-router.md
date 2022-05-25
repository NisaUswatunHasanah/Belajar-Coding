Install router dalam terminal

        npm install react-router-dom

kemuadian check di package.jason untuk melihat dom nya sudah terpasang.

# Code Error

        import { useState, useEffect } from "react";
        import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
        // import Header from "./Components/Header";
        import ProductList from "./Components/ProductList";
        import About from "./Components/About";
        import Contact from "./Components/Contact";

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

          const [name, setName] = useState('Nisa');

          useEffect(() =>{
            console.log('Use Effect Running');
          }, [name]);

          return (
            <div>
              <Router>
                <Switch>
                  <Route path="/">
                    <ProductList products={products} deleteProduct={deleteProduct}/>
                  </Route>
                  <Route path="/about">
                    <About/>
                  </Route>
                  <Route path="/Contact">
                    <Contact/>
                  </Route>
                </Switch>
              </Router>
              
            </div>
          );
        }

        export default App;

