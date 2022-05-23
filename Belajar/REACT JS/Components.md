React adalah sebuah aplication dimana terdapat multiple component.
Buat folder baru didalam "src" name "components", didalam folder component buat file baru bernama "Header.js".

Di dalam Header gunakan fuction component dengan mengetik "rafce" (install dlu extensionnya "ES7"). 

# Code yang ada dalam Header.js

            const Header = () => {
              return (
                <div>
                  <h2> Ini Adalah Components Header</h2>
                </div>
              )
            }

            export default Header

# Code yang ada di dalam App.js

            import Header from "./Components/Header";

            function App() {
              const Judul = "Welcome to My App"
              const Age = 20;
              const Link = "https://github.com/NisaUswatunHasanah"


              return (
                <div>
                  <Header />
                  <h1>{Judul}</h1>
                  <h1>{ Age *2 }</h1>
                  <a href={Link}>Go to My Github</a>
                </div>
              );
            }

            export default App;






