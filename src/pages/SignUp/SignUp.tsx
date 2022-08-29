import React, { ChangeEventHandler, FocusEventHandler, useState } from "react";
import * as Styled from "./Styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ValidateMessage = ({ index }: { index: number }): JSX.Element => {
  const msgs = [
    "nickname은 5자 이상이어야 합니다.",
    // 이미 사용되는 nickname입니다.
    "id는 10자 이상이어야 합니다.",
    // 중복되는 Id 입니다.
    "pw는 10자 이상이어야 합니다",
    "pw와 일치하지 않습니다.",
  ];
  return (
    // index, error type에 따라 메세지 내용 다르게
    <Styled.ValidationMessage>{msgs[index]}</Styled.ValidationMessage>
  );
};
const Input = ({
  placeholder,
  handleInput,
  blurred,
  type,
}: {
  placeholder: string;
  handleInput: ChangeEventHandler;
  blurred: FocusEventHandler;
  type: string;
}): JSX.Element => {
  return (
    <Styled.Input
      placeholder={placeholder}
      onChange={handleInput}
      required={true}
      onBlur={blurred}
      type={type}
    />
  );
};

const SignUp = (): JSX.Element => {
  const [Id, setId] = useState("");
  const [Pw, setPW] = useState("");
  const [Nickname, setNickname] = useState("");
  const [PwCheck, setPwCheck] = useState("");

  const [IdValidate, setIdValidate] = useState(true);
  const [PwValidate, setPwValidate] = useState(true);
  const [NicknameValidate, setNicknameValidate] = useState(true);
  const [PwCheckValidate, setPwCheckValidate] = useState(true);

  const handleNickname = (event: any): void => {
    setNickname(event.target.value);
  };
  const nicknameValidation = (): void => {
    if (Nickname.length < 5 && Nickname.length > 0) {
      // 중복 확인 조건 추가
      setNicknameValidate(false);
    } else {
      setNicknameValidate(true);
    }
  };

  const handleId = (event: any): void => {
    setId(event.target.value);
  };
  const idValidation = (): void => {
    if (Id.length > 0 && Id.length < 10) {
      //  조건에 중복확인도 추가
      setIdValidate(false);
    } else {
      setIdValidate(true);
    }
  };

  const handlePw = (event: any): void => {
    setPW(event.target.value);
  };
  const pwValidation = (): void => {
    if (Pw.length < 10 && Pw.length > 0) {
      setPwValidate(false);
    } else {
      setPwValidate(true);
    }
  };

  const handlePwCheck = (event: any): void => {
    setPwCheck(event.target.value);
  };
  const pwCheckValidation = (): void => {
    if (Pw !== PwCheck && PwCheck.length > 0) {
      setPwCheckValidate(false);
    } else {
      setPwCheckValidate(true);
    }
  };

  const navigate = useNavigate();
  const clickSignUp = (): void => {
    // axios request
    navigate("/", { replace: true });
  };

  const clickSignUpGoogle = (): void => {
    // axios request
    // navigate
  };

  return (
    <Styled.Container>
      <Styled.SignUpWrapper>
        <Styled.SignUpTypo>Sign Up</Styled.SignUpTypo>
        <Styled.Info>
          <Styled.InputLabel>Nickname</Styled.InputLabel>
          <Styled.InputWrapper>
            <Input
              placeholder="닉네임 입력"
              handleInput={handleNickname}
              blurred={nicknameValidation}
              type="text"
            />
            {NicknameValidate === false ? <ValidateMessage index={0} /> : null}
          </Styled.InputWrapper>
        </Styled.Info>
        <Styled.Info>
          <Styled.InputLabel>ID</Styled.InputLabel>
          <Styled.InputWrapper>
            <Input
              placeholder="아이디 입력"
              handleInput={handleId}
              blurred={idValidation}
              type="text"
            />
            {IdValidate === false ? <ValidateMessage index={1} /> : null}
          </Styled.InputWrapper>
        </Styled.Info>
        <Styled.Info>
          <Styled.InputLabel>PW</Styled.InputLabel>
          <Styled.InputWrapper>
            <Input
              placeholder="패스워드 입력"
              handleInput={handlePw}
              blurred={pwValidation}
              type="password"
            />
            {PwValidate === false ? <ValidateMessage index={2} /> : null}
          </Styled.InputWrapper>
        </Styled.Info>
        <Styled.Info>
          <Styled.InputLabel>PW check</Styled.InputLabel>
          <Styled.InputWrapper>
            <Input
              placeholder="패스워드 확인"
              handleInput={handlePwCheck}
              blurred={pwCheckValidation}
              type="password"
            />
            {PwCheckValidate === false ? <ValidateMessage index={3} /> : null}
          </Styled.InputWrapper>
        </Styled.Info>
        <Styled.ButtonContainer>
          <Button variant="contained" onClick={clickSignUp}>
            Sign up
          </Button>
        </Styled.ButtonContainer>
        <Styled.ButtonContainer>
          <Button onClick={clickSignUpGoogle}>Sign up With Google</Button>
        </Styled.ButtonContainer>
      </Styled.SignUpWrapper>
    </Styled.Container>
  );
};

export default SignUp;
