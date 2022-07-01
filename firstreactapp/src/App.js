import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header/>
      <HelloWorld name="Giov" />
      {/* <CounterExample/>*/}
      </div>
  );
}

export default App;
