import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
