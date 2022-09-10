import React, { useEffect, useState, useRef } from "react";
import * as Styled from "./Styled";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

const StartLive = ({ onClick }: { onClick: any }): JSX.Element => {
  const navigate = useNavigate();
  const handleEnter = (): void => {
    navigate("live-now");
  };

  const cameraConstraints = {
    audio: true,
    video: { facingMode: "user" },
  };

  const [mute, setMute] = useState("MUTE");
  const [cam, setCam] = useState("CAM OFF");

  const [myStream, setMyStream] = useState<MediaStream>();

  const handleMuteClick = (): void => {
    if (myStream) {
      myStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
    }
    setMute(mute === "MUTE" ? "UNMUTE" : "MUTE");
  };
  const handleCamClick = (): void => {
    if (myStream) {
      myStream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
    }
    setCam(cam === "CAM OFF" ? "CAM ON" : "CAM OFF");
  };

  const videoRef = useRef<HTMLVideoElement>();
  const myVideo = async () => {
    const myVideo: any = await document.querySelector("#my-video");
    navigator.mediaDevices.getUserMedia(cameraConstraints).then((mystr) => {
      setMyStream(mystr);
      if (myVideo) {
        if ("srcObject" in myVideo) {
          myVideo.srcObject = mystr;
        }
      }
    });
  };

  // const vd: HTMLVideoElement | null = document.querySelector("#my-video");
  useEffect(() => {
    myVideo();
  }, []);

  return (
    <Styled.ModalContainer>
      <Styled.Modal>
        <Styled.ModalHeader>
          <Styled.ModalTypo>Preview</Styled.ModalTypo>
          <CloseIcon onClick={onClick} style={{ cursor: "pointer" }} />
        </Styled.ModalHeader>
        <Styled.ModalBody>
          <video
            id="my-video"
            autoPlay
            playsInline
            ref={videoRef as any}
            style={{ width: "720px", height: "400px" }}
          />
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
