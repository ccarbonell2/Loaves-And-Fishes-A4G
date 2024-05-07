import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Logo from './Components/Images/Logo.png';

function App() {
  return (
    <div >
      <Header />
      <h1>Welcome to the Loaves and Fishes website!</h1>
      <img src={Logo} alt="logo"></img>
      <h2>
        Please tell us a bit about your preferences if this is your first time visiting or schedule a time to pick up your food.
      </h2>
    </div>
  );
}

export default App;
