import { useState } from "react";

const App = () => {
  const [count,setCount] = useState(0)
  const increment = () =>{
    setCount(count => count+1)
  }
  const decrement = () =>{
    setCount(count => count-1)

  }
  return (
    <>
    <div className="App">
      <div class="up">
      <h1 id="heading">Click Counter</h1>

      </div>
      <p id="text">Count is : {count}</p>
      <div className="Buttons">
              <button id="btn1" className="mybtn" onClick={increment}>+</button>
              <button id="btn2" className="mybtn" onClick={decrement}>-</button>
      </div>
      <p id="credits"> This app was created by Agneay B Nair</p>
    </div>
    </>
  );
}

export default App;
