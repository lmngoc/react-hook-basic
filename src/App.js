import logo from './logo.svg';
import './App.css';
import Nav from "./views/Nav";
import { useState, useEffect } from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/Countdown';
import Blog from './views/Blog';
import BlogDetail from './views/BlogDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

  //=didmount
  useEffect(() => {
    // console.log('run use effect address');
  }, [address]);

  useEffect(() => {
    //  console.log('run use effect todo');
  }, [todos]);

  //let Obj = { name: "Ngoc", channel: "Ngoc channel" }
  const handleEventClick = (event) => {
    if (!address) {
      alert('empty input');
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 10000 + 1), title: address, type: "ngoc" };
    //hook not merge state
    // spread syntax array js
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
  const onTimeUp = () => {
    //alert("on time up");
  }
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Hello world react hook - {name}
          </p> */}



          {/* <p style={{ color: "red", marginTop: "20px" }}> {JSON.stringify(Obj)}</p> */}

        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/timer">
            <CountDown onTimeUp={onTimeUp} />
            <span>----------------</span>
            <NewCountDown onTimeUp={onTimeUp} />
          </Route>
          <Route path="/todo">
            <Todo todos={todos} title="All title" deleteDataTodo={deleteDataTodo} />
            <Todo todos={todos.filter(item => item.type === 'ngoc')} title="Ngoc's todos" deleteDataTodo={deleteDataTodo} />

            <input type='text' value={address} onChange={(event) => handleOnChange(event)}></input>
            <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id">
            <BlogDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
