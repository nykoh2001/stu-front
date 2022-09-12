import React, { useEffect, useState } from "react";
import * as Styled from "./Styled";
import Header from "component/Header/Header";
import Map from "api/Map/Map";
import StartLive from "component/StartLive/StartLive";
import { useNavigate } from "react-router";

const Main = (): JSX.Element => {
  const [showStartLive, setShowStartLive] = useState(false);
  const startLiveOnClick = (): void => {
    setShowStartLive((prev) => !prev);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("Authorization")) {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <Styled.Container>
      <Header startLiveOnClick={startLiveOnClick} />
      <Map latitude={37} longitude={127} />
      {showStartLive ? <StartLive onClick={startLiveOnClick} /> : null}
    </Styled.Container>
  );
};

export default Main;
