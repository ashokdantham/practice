// import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Durga from './Components/Durga';
import Soumya from './Components/Soumya';
import Lissa from './Components/Lissa';

function App() {
  const name = "Durga";
  const age = 30;
  const name2= "Lissa";
  const age2 = 25;
  const name3 = "Soumya";
  const age3 = 28;
  const email = 'durga.react@gmail.com'
  return (
    <div className="App">
      <header className="App-header">
        <h1> This is App component</h1>
        <Lissa name={name2} age={age2}/>
        <Durga name={name} age={age} myEmail={email}/>
        <Soumya name={name3} age={age3}/>
      </header>
    </div>
  );
  
}

// index.html --> index.js--> APP --> First --> Durga

export default App;
