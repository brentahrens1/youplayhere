import React from 'react';
import './sass/_base.scss'

//components
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
