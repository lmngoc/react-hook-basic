import logo from './logo.svg';
import './App.css';
import Nav from "./views/Nav";
import { useState } from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import Todo from './views/Todo';
//template + logic
//JSX
//babel
const App = () => {
  let [name, setName] = useState('Ngoc');
  let [address, setAddress] = useState("");
  let [todos, setTodos] = useState([
    { id: 'todo1', title: 'watching youtube', type: "ngoc" },
    { id: 'todo2', title: 'doing homework', type: "su" },
    { id: 'todo3', title: 'reading book', type: "su" }

  ]);
  //let Obj = { name: "Ngoc", channel: "Ngoc channel" }
  const handleEventClick = (event) => {
    if (!address) {
      alert('empty input');
      return;
    }
    //hook not merge state
    // spread syntax array js

    let newTodo = { id: Math.floor(Math.random() * 10000 + 1), title: address, type: "ngoc" };
    setTodos([...todos, newTodo]);
    setAddress('');
  }
  const handleOnChange = (event) => {
    setAddress(event.target.value);
  }
  const deleteDataTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter(item => item.id !== id);
    setTodos(currentTodo);
  }
  return (
    <div className="App">

      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world react hook - {name}

        </p>
        <Todo todos={todos} title="All title" deleteDataTodo={deleteDataTodo} />
        <Todo todos={todos.filter(item => item.type === 'ngoc')} title="Ngoc's todos" deleteDataTodo={deleteDataTodo} />
        {/* <p style={{ color: "red", marginTop: "20px" }}> {JSON.stringify(Obj)}</p> */}
        <input type='text' value={address} onChange={(event) => handleOnChange(event)}></input>
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
