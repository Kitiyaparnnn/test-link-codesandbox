import logo from "./logo.svg";
import "./App.css";
import Header, { SubHeader } from "./Header";
// สามารถเปลี่ยนชื่อ header เป็นชื่ออื่นได้
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
  const [text, setText] = useState([]);
  // const [time, setTime] = useState(Date.now());

  useEffect(() => {
    // console.log("counter change" + counter);
    addText();
    // else
    //   deleteText();
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

  const [tableData, setTableData] = useState([]);
  const [todoInput, setTodo] = useState("");

  const addTodo = () => {
    let number;
    if (tableData.length === 0) number = 1;
    else number = tableData[tableData.length - 1].number + 1;

    const newTodo = {
      number,
      todo: todoInput
    };

    setTableData([...tableData, newTodo]);
    setTodo("");
  };

  const addText = () => {
    const currText = [];
    for (let i = 0; i < counter; i++) {
      // let number;
      // if (text.length === 0) number = 0;
      // else number = text[text.length - 1].number + 1;

      const newText = {
        i
      };

      currText.push(newText);
    }
    setText(currText);
  };

  //   const deleteText = () => {
  // text.filter((numbers) => ()
  //   }

  return (
    <div className="center">
      <Header />
      <SubHeader />
      {/* {counter} 
      //react จำ state เดิมไม่เปลี่ยนค่า */}
      <br />
      {counter}
      <br />
      <button
        style={{
          margin: "10px",
          backgroundColor: "lightgreen"
        }}
        onClick={addCounter}
      >
        +
      </button>
      <button
        style={{ margin: "10px", backgroundColor: "lightpink" }}
        onClick={deleteCounter}
      >
        -
      </button>
      <button
        style={{ margin: "10px", backgroundColor: "lightskyblue" }}
        onClick={resetCounter}
      >
        reset
      </button>
      {text.map((texts) => (
        <p key={texts.i}>All my love is gone</p>
      ))}
      <p>Parn eiei</p>
      <br />
      <h1>This is my todo table</h1>
      <table className="center">
        <thead>
          <th>Number</th>
          <th>Todo</th>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <tr key={data.number}>
                <td>{data.number}</td>
                <td>{data.todo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <input
        value={todoInput}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="add todo"
      />
      <button className="button" onClick={addTodo}>
        add todo
      </button>
      <Footer />
    </div>
  );
}

export default App;
function newFunction() {
  <p>count up</p>;
}
