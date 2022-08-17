import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import Header from "component/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
