import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
