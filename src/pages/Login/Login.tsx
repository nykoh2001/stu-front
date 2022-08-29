import React, { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Styled";
import { Button } from "@mui/material";
import axios from "axios";

const Input = ({
  placeholder,
  handleInput,
}: {
  placeholder: string;
  handleInput: ChangeEventHandler;
}): JSX.Element => {
  return (
    <Styled.Input
      placeholder={placeholder}
      onChange={handleInput}
      required={true}
    />
  );
};

const Login = (): JSX.Element => {
  const [Id, setId] = useState("");
  const [Pw, setPw] = useState("");
  const handleId = (e: any) => {
    setId(e.target.value);
  };
  const handlePw = (e: any) => {
    setPw(e.target.value);
  };

  const navigate = useNavigate();

  const toSignUp = (): void => {
    navigate("/register", { replace: true });
  };

  const clickLogin = (): void => {
    navigate("/", { replace: true });
  };

  const clickGoogleLogin = (): void => {
    axios
      .get("http://localhost:8080/oauth2/authorization/google")
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((e) => console.log("err: ", e));
  };

  return (
    <Styled.Container>
      <Styled.LoginForm>
        <Styled.LoginTypo>Login</Styled.LoginTypo>
        <Styled.Info>
          <Styled.InputLabel>ID</Styled.InputLabel>
          <Input placeholder="ID 입력" handleInput={handleId} />
        </Styled.Info>
        <Styled.Info>
          <Styled.InputLabel>PW</Styled.InputLabel>
          <Input placeholder="PW 입력" handleInput={handlePw} />
        </Styled.Info>
        <Styled.ToSignUp onClick={toSignUp}>회원가입</Styled.ToSignUp>
        <Styled.ButtonContainer>
          <Button onClick={clickLogin} variant="contained">
            Login
          </Button>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer>
          <Button onClick={clickGoogleLogin}>LOGIN WITH GOOGLE</Button>
        </Styled.ButtonContainer>
      </Styled.LoginForm>
    </Styled.Container>
  );
};

export default Login;
