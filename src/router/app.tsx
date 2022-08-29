import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import Main from "pages/Main/Main";
import LiveList from "pages/LiveList/LiveList";

declare global {
  interface Window {
    kakao: any;
  }
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Main />} />
        <Route path="/live-list" element={<LiveList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
