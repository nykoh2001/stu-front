import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import Main from "pages/Main/Main";
import LiveList from "pages/LiveList/LiveList";
import LiveNow from "pages/LiveNow/LiveNow";

declare global {
  interface Window {
    kakao: any;
  }
}

const App = () => {
  const [token, setToken] = useState<string | null | undefined>();
  useEffect(() => {
    const urlParams = new URL(window.location.href).searchParams;
    const urlToken = urlParams.get("accessToken");

    if (urlToken) {
      localStorage.setItem("Authorization", urlToken);
      console.log(
        "url: ",
        `/oauth2/redirect?accessToken=${localStorage.getItem("Authorization")}`
      );
      setToken(localStorage.getItem("Authorization"));
      window.location.replace("/");
      // const [token] = useState(localStorage.getItem("Authorization") ?? "");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
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
