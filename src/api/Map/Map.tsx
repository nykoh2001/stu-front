import React, { useEffect } from "react";
import * as Styled from "./Styled";
import { NEXT_PUBLIC_KAKAOMAP_APPKEY } from "util/global";
import { MapsHomeWork } from "@mui/icons-material";

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map = ({ latitude, longitude }: MapProps): JSX.Element => {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.querySelector("#map");

        const option = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 13,
        };
        const map = new window.kakao.maps.Map(mapContainer, option);
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude]);

  return <Styled.Container id="map"></Styled.Container>;
};

export default Map;
