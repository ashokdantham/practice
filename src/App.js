// import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Durga from './Components/Durga';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> This is App component</h1>
        <First />
        <Durga />
      </header>
    </div>
  );
  
}

// index.html --> index.js--> APP --> First --> Durga

export default App;
