import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled.div`
width: 100%;
display: flex;
box-sizing: border-box;
padding-top: 30px;
`

export const LiveScreenContainer = styled.div`
width: 800px;
height: calc(100vh - 150px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const LiveScreen = styled.div`
width: 720px;
height: 400px;
background-color: #e5e5e5;
box-sizing: border-box;
margin: 0 0 10px;
`
 
export const LiveButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const EtcContainer = styled.div`
width: calc(100% - 800px);
display: flex;
flex-direction: column;
justify-content: space-between;
box-sizing: border-box;
padding: 25px 15px 0 0;
`

export const ChattingContainer = styled.div`
width: 100%;
height: calc(100vh - 300px);
`

export const ChattingTypo = styled.div`
width: 100%;
box-sizing: border-box;
padding: 10px;
margin: 0 0 10px 10px;
font-size: 20px;
color: #444;
`

export const Chatting = styled.div`
width: 100%;
display: flex;
align-items: center;
box-sizing: border-box;
padding: 10px;
`

export const UserName = styled.div`
display: flex;
align-items: center;
margin-right: 4px;
font-weight: 600;
`

export const ChatTypoContainer = styled.div`
width: 100%;
height: 430px;
display: flex;
flex-direction: column;
overflow-x: auto;
`

export const ChatTypo = styled.div`
display: flex;
align-items: center;
font-weight: 400;
`

export const ChatInputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
background: #f3f3f3;
border-radius: 10px;
box-sizing: border-box;
padding: 25px;
`

export const ChatInput = styled.textarea`
width: 100%;
height: 60px;
border: solid 1px #e5e5e5;
border-radius: 6px;
box-sizing: border-box;
margin: 0 0 10px 0;
resize: none;
`