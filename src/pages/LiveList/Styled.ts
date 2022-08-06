import styled from "styled-components";
import { Typography, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const LiveContainer = styled.div`
width: calc(100% - 40px);
display: flex;
justify-content: center;
flex-wrap: wrap;
box-sizing: border-box;
margin: 10px 0 0 0;
`

export const Live = styled.div`
min-width: 350px;
max-width: 380px;
height: 120px;
display: flex;
align-items: center;
`

export const LiveThumbnail = styled.div`
width: 180px;
height: 100px;
background-color: #666;
border-radius: 3px;
box-sizing: border-box;
margin: 0 5px 0 15px;
`

export const LiveTypoWrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
box-sizing: border-box;
padding: 4px;
`

export const LiveTypoContainer = styled.div`
display: flex;
flex-direction: column;
`

export const LiveTitle = styled(Typography)`
color: #222;
`

export const LiveChannel = styled(Typography)`
color: #666;
`

export const LiveViewers = styled(Typography)`
color: #6495ED;
`

export const ViewerIcon = styled.img `
width: 12px;
height: 12px;
box-sizing: border-box;
margin: 0 4px 0 0;
filter: invert(55%) sepia(38%) saturate(1462%) hue-rotate(194deg) brightness(97%) contrast(91%);
`

export const LiveIcon = styled.span`
width: 44px;
display: flex;
align-items: center;
`

export const LiveIconTypo = styled.div`
color: #fff;
font-size: 14px;
`

export const LiveDot = styled.img `
width: 10px;
height: 10px;
margin: 0 2px;
filter: invert(18%) sepia(83%) saturate(6591%) hue-rotate(359deg) brightness(102%) contrast(122%);
`

export const SearchFieldContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
box-sizing: border-box;
margin: 10px 10px 20px 10px;
`

export const SearchField = styled.div`
width: 220px;
height: 40px;
display: flex;
align-items: center;
box-sizing: border-box;
margin: 0 25px;
`

export const SearchButton = styled(SearchIcon)`
width: 16px;
height: 16px;
margin: 0 4px 0 0;
cursor: pointer;
`

export const SearchInput = styled(TextField)``

export const PaginationContainer = styled.div`
box-sizing: border-box;
margin: 20px;
`