import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const LoginForm = styled.div `
max-width: 550px;
min-width: 390px;
height: calc(100vh - 40px);
display: flex;
flex-direction: column;
justify-content: center;
`

export const LoginTypo = styled.div `
width: 100%;
display: flex;
align-items: center;
box-sizing: border-box;
margin: 15px 60px;
font-size: 20px;
color: #333;
`

export const Info = styled.div `
width: calc(100% - 60px);
min-width: 390px;
display: flex;
justify-content: center;
box-sizing: border-box;
margin: 5px 30px;
`

export const InputLabel = styled.div`
max-width: 110px;
min-width: 60px;
min-width: 90px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
margin: 4px 15px 0 0;
`

export const Input = styled.input `
width: 450px;
max-width: calc(100% - 20px);
min-width: 240px;
height: 40px;
box-sizing: border-box;
padding: 8px 12px;
`

export const ToSignUp = styled.div`
display: flex;
justify-content: flex-end;
box-sizing: border-box;
margin: 2px 30px;
color: #666;
font-size: 12px;
cursor: pointer;
`

export const ButtonContainer = styled.div`
width: calc(100% - 60px);
min-width: 390px;
display: flex;
justify-content: center;
box-sizing: border-box;
margin: 5px 30px;
padding-left: 50px;
`