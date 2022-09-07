import React, { useEffect, useState } from "react";
import * as Styled from "./Styled";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

const StartLive = ({ onClick }: { onClick: any }): JSX.Element => {
  const initialConstraints = {
    audio: true,
    video: true,
  };
  const cameraConstraints = {
    audio: true,
    video: true,
  };
  const [myStream, setMyStream] = useState(
    navigator.mediaDevices.getUserMedia(initialConstraints)
  );
  const getMedia = async ({ deviceId }: { deviceId: string | null }) => {
    const mystr = await navigator.mediaDevices.getUserMedia(
      deviceId ? cameraConstraints : initialConstraints
    );
    setMyStream(mystr as any);
  };

  const [mute, setMute] = useState("MUTE");
  const [cam, setCam] = useState("CAM OFF");

  const handleMuteClick = (): void => {
    setMute(mute === "MUTE" ? "UNMUTE" : "MUTE");
  };
  const handleCamClick = (): void => {
    setCam(cam === "CAM OFF" ? "CAM ON" : "CAM OFF");
  };

  const navigate = useNavigate();
  const handleEnter = (): void => {
    navigate("live-now");
  };

  useEffect(() => {
    // getMedia();
  }, []);
  return (
    <Styled.ModalContainer>
      <Styled.Modal>
        <Styled.ModalHeader>
          <Styled.ModalTypo>Preview</Styled.ModalTypo>
          <CloseIcon onClick={onClick} style={{ cursor: "pointer" }} />
        </Styled.ModalHeader>
        <Styled.ModalBody>
          <Styled.MyStream />
          <Styled.ModalButtonContainer>
            <Styled.ModalButton
              sx={{ m: 1 }}
              variant="contained"
              onClick={handleMuteClick}
            >
              {mute}
            </Styled.ModalButton>
            <Styled.ModalButton
              sx={{ m: 1 }}
              variant="contained"
              onClick={handleCamClick}
            >
              {cam}
            </Styled.ModalButton>
            <Styled.ModalButton sx={{ m: 1 }} onClick={handleEnter}>
              Enter
            </Styled.ModalButton>
          </Styled.ModalButtonContainer>
        </Styled.ModalBody>
      </Styled.Modal>
    </Styled.ModalContainer>
  );
};

export default StartLive;
