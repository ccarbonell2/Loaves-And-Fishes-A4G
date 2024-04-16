import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Logo from "./Components/Images/Logo.png";

function App() {
  return (
    <div >
      <Header />
      <img src={Logo.png} alt="Logo"></img>
      <h1>Welcome to our website!</h1>
      <h2>
        Please tell us a bit about your preferences if this is your first time visiting or schedule a time to pick up your food.
      </h2>
      <Footer />
    </div>
  );
}

export default App;
