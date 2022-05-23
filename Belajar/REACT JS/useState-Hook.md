useStae ini berfungsi untuk merubah variabel contohnya:

import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [title, setTitle] = useState("Welcome to My App");
  const [Age, setAge] = useState(20);

  const changeTitle = () => {
    setTitle("Title Changed");
    setAge(40);
  }

  return (
    <div>
      <Header />
      <h1>{ title }</h1>
      <h1>Age:{ Age }</h1>
      <button onClick={ changeTitle }>Change Title</button>
    </div>
  );
}

export default App;

Ketika dirun didalam browser, maka akan tertera bahwa Age: 20, jika di klick "Change Title", maka Age berubah menjadi "40".




