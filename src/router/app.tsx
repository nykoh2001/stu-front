import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import Main from "pages/Main/Main";
import LiveList from "pages/LiveList/LiveList";
import LiveNow from "pages/LiveNow/LiveNow";
import { useScrollTrigger } from "@mui/material";

declare global {
  interface Window {
    kakao: any;
  }
}

const App = () => {
  const urlParams = new URL(window.location.href).searchParams;
  const urlToken = urlParams.get("accessToken");

  const handleOauthLogin = (): void => {};

  if (urlToken) {
    localStorage.setItem("Authorization", urlToken);
    console.log(
      "url: ",
      `/oauth2/redirect?accessToken=${localStorage.getItem("Authorization")}`
    );
  }

  const token = localStorage.getItem("Authorization");

  return (
    <BrowserRouter>
      <Routes>
        {!token && <Navigate to="/login" />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/" element={<Main />} />
        <Route path="/live-list" element={<LiveList />} />
        <Route path="/live-now" element={<LiveNow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
