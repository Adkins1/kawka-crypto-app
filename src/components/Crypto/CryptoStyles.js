import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { maxDevice } from "../variables";

export const Container = styled(LinkR)`
    min-width: 20%;
    min-height: 250px;
    background: white;
    cursor: pointer;
    transition: .2s;
    text-decoration: none;
    color: black;
    :hover{
        transform: scale(110%);
        transition: .2s;
    }
`
export const Header = styled.div`
    min-height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`
export const Paragraph = styled.div`
    font-size: ${({ fontSize }) => fontSize ? fontSize+"rem" : "1rem"};
    margin: 10px;
    font-weight: ${({bold}) => bold ? 900 : "normal" };
`
export const Image = styled.img`
    height: 100px;
    width: 20%;
    object-fit: contain;
`
export const Body = styled.div`
    height: 70%;
    padding: 10px;
`
export const GridRow = styled.div`
    padding: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${({columns}) => columns ? columns : 1}, 1fr);
    grid-gap: ${({gap}) => gap ? gap+"px" : 0};
    @media screen and (${maxDevice.laptop}) {
        grid-template-columns: repeat(${({columns}) => columns ? columns/2 : 1}, 1fr);  
        grid-gap: ${({gap}) => gap ? gap/2+"px" : 0};
    }
    @media screen and (${maxDevice.mobileL}) {
        grid-template-columns: repeat(${({columns}) => 1}, 1fr);  
        grid-gap: ${({gap}) => gap ? gap/2+"px" : 0};
    }
`
export const Input = styled.input`
    margin: 40px;
    font-size: 1.2rem;
    height: 2rem;
    min-width: 300px;
    @media screen and (${maxDevice.laptop}) {
        margin: 10px;
        margin-left: auto;
        margin-right: auto;
    }
`
export const InputContainer = styled.div`
    width: 100%;
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`