import styled from "styled-components";
import { Typography } from "@mui/material";

export const Container = styled.div `
width: 100%;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgb(0, 0, 128);
box-sizing: border-box;
padding: 0 20px;
`

export const HeaderTypoContainer = styled.div`
display: flex;
align-items: center;
`

export const HeaderTypo = styled(Typography)`
color: #fff;
box-sizing: border-box;
margin: 0 2px;
cursor: pointer;
`

export const HeaderIcon = styled.img `
width: 20px;
height: 20px;
box-sizing: border-box;
margin: 0 8px;
cursor: pointer;
filter: invert();
`
