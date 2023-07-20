import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
// import useUserInput from './useUserInput';
// import UserInputContext from './UserInputContext';
import { UserInputProvider } from "./InputContext";


function App() {
  return (
    <UserInputProvider>
    <div className="app">
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
      </Routes>
    </div>
    </UserInputProvider>
  );
}

export default App;
