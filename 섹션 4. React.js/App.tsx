import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [variable, setVariable] = useState(0);
  function editVarialbe() {
    setVariable((prev) => prev + 1); // 밑과 같지만 동시에 값이 들어온 경우면 이 코드가 이전의 값을 반영해준다.
    //setVariable(variable + 1);
    console.log(variable);
  }
  return (
    <div className="App">
      <button onClick={() => editVarialbe()}>count + 1</button>
      <h1>{variable}</h1> {/* {}를 이용하면 variable 글자가 아닌 variable 글자 값을 알 수 있다. */}
    </div>
  );
}

export default App;
