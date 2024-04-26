import React from 'react';
import logo from './Components/Images/Logo.png';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      <Header />
      <logo />
      <h1>Welcome to our website!</h1>
      <h2>
        Please tell us a bit about your preferences if this is your first time visiting or schedule a time to pick up your food.
      </h2>
      <Footer />
    </div>
  );
}

export default App;
