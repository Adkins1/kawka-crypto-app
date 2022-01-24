import styled from "styled-components";
import { maxDevice } from "../variables";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const Row = styled.div`
    width: 80%;
    @media screen and (${maxDevice.mobileL}) {
        width: 100%;
    }
`