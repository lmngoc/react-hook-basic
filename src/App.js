import logo from './logo.svg';
import './App.css';
import Nav from "./views/Nav";

//template + logic
//JSX
//babel
const App = () => {
  let Obj = { name: "Ngoc", channel: "Ngoc channel" }
  const handleEventClick = (event) => {
    console.log("click me", event);
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world react hook

        </p>
        <p style={{ color: "red", marginTop: "20px" }}> {JSON.stringify(Obj)}</p>
        <input type='text' value="Ngoc"></input>
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
