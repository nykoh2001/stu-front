import React, { useEffect } from "react";
import * as Styled from "./Styled";
const { kakao } = window as any;

const Map = (): JSX.Element => {
  kakao.maps.load(() => {
    const container = document.getElementById("map");

    const option = {
      center: new kakao.maps.LatlLng(37, 127),
      level: 3,
    };

    const map = new kakao.maps.Map(container, option);
  });

  return <Styled.Container id="map"></Styled.Container>;
};

export default Map;
