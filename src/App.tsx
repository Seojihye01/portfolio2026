import { useState } from "react";

import "./App.css";
import "./components/Header.css";
import Header from "./components/Header.tsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Header></Header>
    </>
  );
}

export default App;
