import React, { useEffect, useState } from "react";
import * as Styled from "./Styled";
import Header from "component/Header/Header";
import { Pagination } from "@mui/material";

const LiveTitle = ({ typo }: { typo: string }): JSX.Element => {
  return <Styled.LiveTitle variant="subtitle1">{typo}</Styled.LiveTitle>;
};

const LiveChannel = ({ typo }: { typo: string }): JSX.Element => {
  return <Styled.LiveChannel variant="caption">{typo}</Styled.LiveChannel>;
};

const LiveViewers = ({ typo }: { typo: string }): JSX.Element => {
  return (
    <Styled.LiveViewers variant="caption">
      <Styled.ViewerIcon src="https://cdn-icons-png.flaticon.com/512/983/983890.png" />
      {typo}
    </Styled.LiveViewers>
  );
};

const LiveIcon = (): JSX.Element => {
  return (
    <Styled.LiveIcon>
      <Styled.LiveDot src="https://cdn-icons-png.flaticon.com/512/0/14.png" />
      <Styled.LiveIconTypo>LIVE</Styled.LiveIconTypo>
    </Styled.LiveIcon>
  );
};

const Live = ({
  title,
  channel,
  viewers,
}: {
  title: string;
  channel: string;
  viewers: string;
}): JSX.Element => {
  return (
    <Styled.Live>
      <Styled.LiveThumbnail>
        <LiveIcon />
      </Styled.LiveThumbnail>
      <Styled.LiveTypoWrapper>
        <LiveTitle typo={title} />
        <Styled.LiveTypoContainer>
          <LiveChannel typo={channel} />
          <LiveViewers typo={viewers} />
        </Styled.LiveTypoContainer>
      </Styled.LiveTypoWrapper>
    </Styled.Live>
  );
};

const SearchField = (): JSX.Element => {
  return (
    <Styled.SearchFieldContainer>
      <Styled.SearchField>
        <Styled.SearchButton />
        <Styled.SearchInput label="Search" variant="outlined" size="small" />
      </Styled.SearchField>
    </Styled.SearchFieldContainer>
  );
};

const LiveList = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const handlePage = (e: any): void => {
    const nowPage = parseInt(e.target.outerText);
    if (!nowPage) {
      const pageMsg = e.target.getAttribute("data-testid");
      if (pageMsg === "NavigateNextIcon") {
        setPage((prev) => prev + 1);
      } else if (pageMsg === "NavigateBeforeIcon") {
        setPage((prev) => prev - 1);
      }
    } else {
      setPage(nowPage);
    }
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [display, setDisplay] = useState(4);

  const handleResize = (): void => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWindowSize({
      width: width,
      height: height,
    });
    if (width > 1400) {
      setDisplay(4);
    } else if (width >= 1090) {
      setDisplay(3);
    } else if (width >= 740) {
      setDisplay(2);
    } else {
      setDisplay(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Styled.Container>
      <Header />
      <Styled.LiveContainer>
        <SearchField />
        {[...Array(display * 4)].map((i: number) => (
          <Live title="TITLE" channel="Channel" viewers="2" />
        ))}
      </Styled.LiveContainer>
      <Styled.PaginationContainer>
        <Pagination
          count={5}
          variant="outlined"
          shape="rounded"
          onChange={handlePage}
        />
      </Styled.PaginationContainer>
    </Styled.Container>
  );
};

export default LiveList;
