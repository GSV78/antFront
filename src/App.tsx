import React from 'react';
import Header from './Components/Header/Header';
import Servises from './Components/Servises/Servises';
import Content from './Components/Content/Content';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Conditioners from './Components/Conditioners/Conditioners';
import Cameras from './Components/Cameras/Cameras';
import Security from './Components/Security/Security';
import Network from './Components/Network/Network';
import Smarthome from './Components/Smarthome/Smarthome';
import Install from './Components/Install/Install';
import Gsm from './Components/Gsm/Gsm';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path={'/*'}
          element={
            <div>
              <Servises />
              <Content />
            </div>
          }
        />
        <Route path={'/conditioners/*'} element={<Conditioners />} />
        <Route path={'/cameras/*'} element={<Cameras />} />
        <Route path={'/security/*'} element={<Security />} />
        <Route path={'/network/*'} element={<Network />} />
        <Route path={'/smarthome/*'} element={<Smarthome />} />
        <Route path={'/install/*'} element={<Install />} />
        <Route path={'/gsm/*'} element={<Gsm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
