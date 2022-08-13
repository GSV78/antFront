import React from 'react';
import Header from './Components/Header/Header';
import Servises from './Components/Servises/Servises';
import Content from './Components/Content/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Servises />
      <Content />
    </div>
  );
}

export default App;
