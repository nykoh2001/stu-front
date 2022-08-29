import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const SignUpWrapper = styled.div`
width: 100%;
height: calc(100vh - 40px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const SignUpTypo = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
margin: 10px 0;
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

export const InputWrapper = styled.div`
width: 450px;
min-width: 240px;
box-sizing: border-box;
padding: 2px 0;
`

export const Input = styled.input `
width: 450px;
max-width: calc(100% - 20px);
min-width: 240px;
height: 40px;
box-sizing: border-box;
padding: 8px 12px;
`

export const ValidationMessage = styled.div `
width: 100%;
display: flex;
align-items: center;
color: #ff0000;
font-size: 13px;
`

export const ButtonContainer = styled.div`
width: 450px;
max-width: calc(100% - 20px);
min-width: 240px;
display: flex;
justify-content: center;
box-sizing: border-box;
padding: 8px 12px 8px 30px;
`