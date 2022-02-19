import styled from "styled-components"
import { color, maxWidthDevice } from "../variables"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media screen and (${maxWidthDevice.laptop}) {
    width: 100%;
  }
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Details = styled.div`
  padding: 50px 0 50px 0;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const SubDetails = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  padding: 50px 0 50px 0;
  @media screen and (${maxWidthDevice.laptop}) {
    width: 90%;
  }
`
export const Col = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`
export const Title = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "rem" : "1rem")};
  font-weight: 900;
  height: 100px;
`
export const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100px;
`
export const Paragraph = styled.div`
  font-weight: ${({ bold }) => (bold ? 900 : "normal")};
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
  padding: 20px;
`
export const OptionsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Options = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
`
export const Select = styled.select`
  margin: 40px 0 40px 0;
  width: 100px;
  height: 2rem;
  font-size: 1.5rem;
`
export const Option = styled.option``
export const Description = styled.div`
  width: 100%;
  padding-right: 20px;
  p {
    padding: 10px 0 10px 0;
  }
  div {
    padding: 5px 0 5px 0;
  }
  div > a {
    color: ${color.darkBlue};
    font-weight: 900;
    text-decoration: none;
    transition: 0.2s;
    :hover {
      color: ${color.darkBlueHover};
      font-size: 1.2rem;
      transition: 0.2s;
    }
  }
`
