import styled from "styled-components"
import { maxWidthDevice } from "../variables"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Row = styled.div`
  width: 80%;
  @media screen and (${maxWidthDevice.mobileL}) {
    width: 100%;
  }
`
