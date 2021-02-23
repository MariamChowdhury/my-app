import logo from './logo.svg';
import './App.css';

function App() {
  var properties={
    name:'First',
    language:'React'
  }
  var style={
      color:'pink',
      backgroundColor:'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={style}>{properties.name+" "+ properties.language} App!!</h1>
        <p>
          Edit done! <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
