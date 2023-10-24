import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [done, setDone] = useState([]);
  const date=new Date()
  const day=date.getDay()//returning order no.of day in the week
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayNames[day]} 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setTodos([...todos, { id: Date.now(), text: todo }]);
            console.log(todos);
          }}
          className="fas fa-plus"
        ></i>
      </div>

      <div className="todos">
        {todos.map((obj, index) => {
          return (
            <div className="todo" key={index}>
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    setDone([...done, { id: obj.id, text: obj.text }]);
                    setTodos(todos.filter((item) => item.id !== obj.id));
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() =>
                    setTodos(todos.filter((item) => item.id !== obj.id))
                  }
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        <div className="jobdone">
          <h4>completed jobs</h4>
          {done.map((item, index) => {
            return <h6 key={index}>- {item.text}</h6>;
          })}
        </div>

        <div className="jobdone">
          <h5>pending jobs</h5>
          {todos.map((item, index) => {
            if (!item.status) {
              return <h6 key={index}>- {item.text}</h6>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
