import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import * as Styled from "./Styled";

const Input = ({
  placeholder,
  handleInput,
}: {
  placeholder: string;
  handleInput: ChangeEventHandler;
}): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("changed");
  }, [inputRef?.current?.checked]);

  return (
    <Styled.Input
      placeholder={placeholder}
      ref={inputRef}
      checked={inputRef.current === document.activeElement}
      onChange={handleInput}
      required={true}
    />
  );
};

const ValidateMessage = ({ index }: { index: number }): JSX.Element => {
  const labels = ["nickname", "id", "pw", "pw check"];
  return (
    // index, error type에 따라 메세지 내용 다르게
    <Styled.validationMessage>
      {labels[index]}를 다시 입력해주세요
    </Styled.validationMessage>
  );
};

const SignUp = (): JSX.Element => {
  const [Id, setId] = useState("");
  const [Pw, setPW] = useState("");
  const [Nickname, setNickname] = useState("");
  const [PwCheck, setPwCheck] = useState("");
  const validated = [true, true, true, true];

  const focusCheck = (e: any, index: number): boolean => {
    validated[index] = e.target.checked;
    return e.target.checked;
  };

  const handleNickname = (event: any): void => {
    setNickname(event.target.value);
    const focused = focusCheck(event, 0);
    if (!focused && Nickname.length < 5 && Nickname.length > 0) {
      // 중복 확인 조건 추가
      validated[0] = false;
    } else {
      validated[0] = true;
    }
  };
  const handleId = (event: any): void => {
    setId(event.target.value);
    const focused = focusCheck(event, 1);
    if (!focused && Id.length > 0 && Id.length < 10) {
      //  조건에 중복확인도 추가
      validated[1] = false;
    } else {
      validated[1] = true;
    }
  };
  const handlePw = (event: any): void => {
    setPW(event.target.value);
    const focused = focusCheck(event, 2);
    if (!focused && Pw.length < 10 && Pw.length > 0) {
      validated[2] = false;
    } else {
      validated[2] = true;
    }
  };
  const handlePwCheck = (event: any): void => {
    setPwCheck(event.target.value);
    const focused = focusCheck(event, 3);
    if (!focused && Pw === PwCheck && PwCheck.length > 0) {
      validated[3] = false;
    } else {
      validated[3] = true;
    }
  };

  return (
    <Styled.Container>
      <Styled.SignUpWrapper>
        <Styled.SignUpTypo>Sign Up</Styled.SignUpTypo>
        <Styled.Info>
          <Styled.InputLabel>Nickname</Styled.InputLabel>
          <Styled.InputWrapper>
            <Input placeholder="닉네임 입력" handleInput={handleNickname} />
            {validated[0] === false ? <ValidateMessage index={0} /> : null}
          </Styled.InputWrapper>
        </Styled.Info>
        <Styled.Info>
          <Styled.InputLabel>ID</Styled.InputLabel>
          <Styled.InputWrapper>
            <Input placeholder="아이디 입력" handleInput={handleId} />
            {validated[1] === false ? <ValidateMessage index={1} /> : null}
          </Styled.InputWrapper>
        </Styled.Info>
        <Styled.Info>
          <Styled.InputLabel>PW</Styled.InputLabel>
          <Styled.InputWrapper>
            <Input placeholder="패스워드 입력" handleInput={handlePw} />
            {validated[2] === false ? <ValidateMessage index={2} /> : null}
          </Styled.InputWrapper>
        </Styled.Info>
        <Styled.Info>
          <Styled.InputLabel>PW check</Styled.InputLabel>
          <Styled.InputWrapper>
            <Input placeholder="패스워드 확인" handleInput={handlePwCheck} />
            {validated[3] === false ? <ValidateMessage index={3} /> : null}
          </Styled.InputWrapper>
        </Styled.Info>
      </Styled.SignUpWrapper>
    </Styled.Container>
  );
};

export default SignUp;
