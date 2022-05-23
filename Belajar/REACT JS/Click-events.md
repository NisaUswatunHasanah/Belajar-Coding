# Code App.js

        import Header from "./Components/Header";

        function App() {
          const Judul = "Welcome to My App"
          const Age = 20;
          const Link = "https://github.com/NisaUswatunHasanah"

          const clickMe = (name) => {
            console.log('Hello '+ name);
          }



          return (
            <div>
              <Header />
              <h1>{Judul}</h1>
              <h1>{ Age *2 }</h1>
              <a href={Link}>Go to My Github</a>
              <button onClick={ clickMe('nisa') }>Click Me</button>
            </div>
          );
        }

        export default App;

# Code Header

        const Header = () => {
          return (
            <div>
              <h2> Ini Adalah Components Header</h2>
            </div>
          )
        }

        export default Header





