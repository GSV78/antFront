import React from 'react';
import Header from './Components/Header/Header';
import Servises from './Components/Servises/Servises';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Header />
      </header> */}
      <Header />
      <Servises />
    </div>
  );
}

export default App;
