import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import FoodScatter from './components/FoodScatter';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <FoodScatter />
      <footer className="footer">
        <p>The Greatness Of Meat...</p>
      </footer>
    </div>
  );
}

export default App;