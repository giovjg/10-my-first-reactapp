// import logo from './logo.svg'; // look in the same directory cause ./logo.svg is relative to the current file
// import './App.css';
import React, { Component }  from 'react'; // this is a module from node_modules folder
import HelloWorld from './Components/HelloWorld';
//import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';

// functional component ,only one wrapper div is allowed even if it contains multiple components, we use s name
function App() {
  return (
    <div>
      <Header/>
      <HelloWorld name="Milan !!!" />

      <Footer/>
      </div>
  );
}

export default App;// this is being used by another , into the index file
