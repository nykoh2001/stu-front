import React, { useEffect } from "react";
import * as Styled from "./Styled";
import { Button } from "@mui/material";

const LiveNow = (): JSX.Element => {
  useEffect(() => {
    if (!localStorage.getItem("Authorization")) {
      window.location.replace("/login");
    }
  }, []);
  return (
    <Styled.Container>
      <Styled.LiveScreenContainer>
        <Styled.LiveScreen />
        <Styled.LiveButtonContainer>
          <Button variant="contained">Exit</Button>
        </Styled.LiveButtonContainer>
      </Styled.LiveScreenContainer>
      <Styled.EtcContainer>
        <Styled.ChattingContainer>
          <Styled.ChattingTypo>Chatting</Styled.ChattingTypo>
          <Styled.ChatTypoContainer>
            {[...Array(20)].map((i) => (
              <Styled.Chatting>
                <Styled.UserName>USER:</Styled.UserName>
                <Styled.ChatTypo>this is chatting</Styled.ChatTypo>
              </Styled.Chatting>
            ))}
          </Styled.ChatTypoContainer>
        </Styled.ChattingContainer>
        <Styled.ChatInputContainer>
          <Styled.ChatInput placeholder="write a chat" />
          <Button variant="contained">Enter</Button>
        </Styled.ChatInputContainer>
      </Styled.EtcContainer>
    </Styled.Container>
  );
};

export default LiveNow;
