import React, { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router";
import * as Styled from "./Styled";

const HeaderIcon = ({
  src1,
  src2,
  onClick,
}: {
  src1: string;
  src2: string;
  onClick: MouseEventHandler;
}): JSX.Element => {
  const [mouseHeaderIcon, setMouseHeaderIcon] = useState(false);
  const mouseEntered = (): void => {
    setMouseHeaderIcon(true);
  };
  const mouseLeaved = (): void => {
    setMouseHeaderIcon(false);
  };
  return (
    <Styled.HeaderIcon
      onMouseEnter={mouseEntered}
      onMouseLeave={mouseLeaved}
      src={mouseHeaderIcon ? src2 : src1}
      onClick={onClick}
    />
  );
};
const HeaderTypo = ({
  onClick,
  typo,
  variant,
}: {
  onClick: MouseEventHandler;
  typo: string;
  variant?:
    | "body1"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2"
    | "body2"
    | "overline"
    | undefined;
}): JSX.Element => {
  return (
    <Styled.HeaderTypo onClick={onClick} variant={variant}>
      {typo}
    </Styled.HeaderTypo>
  );
};

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const toMain = (): void => {
    navigate("/main");
  };
  const toMyPage = (): void => {
    navigate("/my-page");
  };
  const toStartLive = (): void => {
    navigate("/live");
  };
  const toLiveList = (): void => {
    navigate("/live-now");
  };
  const toLogin = (): void => {
    navigate("/login", { replace: true });
  };

  return (
    <Styled.Container>
      <HeaderTypo onClick={toMain} typo="STU" />
      <Styled.HeaderTypoContainer>
        <HeaderIcon
          src1="https://cdn-icons-png.flaticon.com/512/456/456283.png"
          src2="https://cdn-icons-png.flaticon.com/512/456/456212.png"
          onClick={toMyPage}
        />
        <HeaderIcon
          src1="https://cdn-icons.flaticon.com/png/512/5668/premium/5668088.png?token=exp=1659767004~hmac=9487c282688ad4442f2680568d8a0a6a"
          src2="https://cdn-icons.flaticon.com/png/512/4467/premium/4467457.png?token=exp=1659767571~hmac=5a5ebace33ec7a8c367b98e4e75adee2"
          onClick={toStartLive}
        />
        <HeaderIcon
          src1="https://cdn-icons-png.flaticon.com/512/2177/2177994.png"
          src2="https://cdn-icons-png.flaticon.com/512/2406/2406849.png"
          onClick={toLiveList}
        />
        <HeaderTypo onClick={toLogin} typo="Login" variant="caption" />
      </Styled.HeaderTypoContainer>
    </Styled.Container>
  );
};

export default Header;
