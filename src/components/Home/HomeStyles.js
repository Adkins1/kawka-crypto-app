import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
import { color, maxWidthDevice } from "../variables"

export const Container = styled.div`
  padding: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media screen and (${maxWidthDevice.mobileL}) {
    padding: 10px;
  }
`
export const GridRow = styled.div`
  padding: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${({ columns }) => (columns ? columns : 1)},
    1fr
  );
  grid-gap: ${({ gap }) => (gap ? gap : 0)};
  @media screen and (${maxWidthDevice.mobileL}) {
    padding: 10px;
  }
`
export const Title = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "rem" : "1rem")};
  grid-area: ${({ row }) => row} / ${({ col }) => col} / span 1 / span 1;
  @media screen and (${maxWidthDevice.mobileL}) {
    font-size: ${({ fontSize }) =>
      fontSize ? fontSize / 1.8 + "rem" : "1rem"};
  }
`
export const Paragraph = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "rem" : "1rem")};
  grid-area: ${({ row }) => row} / ${({ col }) => col} / span 1 / span 1;
  padding: 10px 0 10px 0;
`
export const TitleRow = styled.div`
  padding: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (${maxWidthDevice.mobileL}) {
    padding: 10px;
  }
`
export const More = styled(LinkR)`
  text-decoration: none;
  font-weight: 900;
  color: ${color.darkBlue};
  transition: 0.2s;
  font-size: 1rem;
  :hover {
    color: ${color.darkBlueHover};
    transform: scale(110%);
    transition: 0.2s;
  }
  @media screen and (${maxWidthDevice.mobileL}) {
    font-size: 0.8rem;
  }
`
