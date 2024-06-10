import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*this wrong because both routes have the same path ('/'). This means that only one of the components will be rendered when you navigate to '/', and it doesn't allow you to navigate to the Login component.    
        <Route path='/' element={<Login/>}/> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
