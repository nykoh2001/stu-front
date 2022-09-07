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

const Header = ({
  startLiveOnClick,
}: {
  startLiveOnClick: MouseEventHandler;
}): JSX.Element => {
  const navigate = useNavigate();

  const toMain = (): void => {
    navigate("/");
  };
  const toMyPage = (): void => {
    navigate("/my-page");
  };
  const toLiveList = (): void => {
    navigate("/live-list");
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
          src1="https://cdn-icons-png.flaticon.com/512/1159/1159798.png"
          src2="https://cdn-icons-png.flaticon.com/512/1160/1160041.png"
          onClick={startLiveOnClick}
        />
        <HeaderIcon
          src1="https://cdn-icons-png.flaticon.com/512/2177/2177994.png"
          src2="https://cdn-icons-png.flaticon.com/512/2406/2406849.png"
          onClick={toLiveList}
        />
        <HeaderTypo onClick={toLogin} typo="Logout" variant="caption" />
      </Styled.HeaderTypoContainer>
    </Styled.Container>
  );
};

export default Header;
