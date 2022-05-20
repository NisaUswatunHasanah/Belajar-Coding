# Code dynamic Value di App.js

function App() {
  const Judul = "Welcome to My App"
  const Age = 20;
  const Link = "https://github.com/NisaUswatunHasanah"
  return (
    <div>
      <h1>{Judul}</h1>
      <h1>{ Age *2 }</h1>
      <a href={Link}>Go to My Github</a>
    </div>
  );
}

export default App;
