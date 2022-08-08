import React from "react";
import * as Styled from "./Styled";
import Header from "component/Header/Header";
import Map from "api/Map/Map";

const Main = (): JSX.Element => {
  return (
    <Styled.Container>
      <Header />
      <Map />
    </Styled.Container>
  );
};

export default Main;
