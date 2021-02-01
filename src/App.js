import logo from "./logo.svg";
import "./App.css";
// import Header, { SubHeader } from "./Header";
// สามารถเปลี่ยนชื่อ header เป๋็นชื่ออื่นได้
import { useState, useEffect } from "react";

function Footer() {
  return <h1>This is footer</h1>;
}
function App() {
  // let counter = 0;
  // const addCounter = () => {
  //   counter++;
  //   console.log(counter);
  // };

  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(Date.now());

  useEffect(() => {}, []);
  useEffect(() => {
    console.log("counter change" + counter);
  }, [counter]);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const deleteCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      {/* <Header /> */}
      {/* {counter} 
      //react จำ state เดิมไม่เปลี่ยนค่า */}
      console.log("eiei")
      <br />
      {counter}
      <br />
      <button onClick={addCounter}>+</button>
      <button onClick={deleteCounter}>-</button>
      <button onClick={resetCounter}>reset</button>
      <p>Parn eiei</p>
      <Footer />
    </>
  );
}

export default App;
