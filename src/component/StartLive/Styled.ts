import styled from "styled-components";
import { Button } from "@mui/material";
import { spacing } from "@mui/system";

export const ModalContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(255, 255, 255, 0.35);
backdrop-filter: blur(1px);
box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
margin: auto;
position: absolute;
z-index: 1;
`

export const Modal = styled.div`
width: 770px;
height: 550px;
display: flex;
flex-direction: column;
align-items: center;
background: #fff;
border: solid 1px #e5e5e5;
border-radius: 15px;
`

export const ModalHeader = styled.div`
width: 100%;
height: 45px;
display: flex;
justify-content: flex-end;
align-items: center;
border-bottom: solid 1px #e5e5e5;
box-sizing: border-box;
padding: 0 10px;
box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 5%);
`

export const ModalTypo = styled.div`
margin: auto;
`

export const ModalBody = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const MyStream = styled.video`
width: 720px;
height: 400px;
`

export const ModalButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
margin: 8px 15px;
`

export const ModalButton = styled(Button)(spacing);