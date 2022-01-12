import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { color, maxDevice } from "../variables";

export const GridRow = styled.div`
    padding: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns ? columns : 1}, 1fr);
    grid-gap: ${({ gap }) => gap ? gap + "px" : 0};
    @media screen and (${maxDevice.laptop}) {
        grid-template-columns: repeat(${({ columns }) => 1}, 1fr);  
        grid-gap: ${({ gap }) => gap ? gap / 2 + "px" : 0};
    }
`
export const Container = styled.div`
    min-width: 20%;
    min-height: 300px;
    background: white;
    cursor: pointer;
    transition: .2s;
    padding: 10px;

    :hover{
        transform: scale(110%);
        transition: .2s;
    }
    a{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-decoration: none;
        color: black;
    }
`
export const Header = styled.div`
    max-height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`
export const Paragraph = styled.div`
    font-size: ${({ fontSize }) => fontSize ? fontSize + "rem" : "1rem"};
    padding: 10px;
    font-weight: ${({ bold }) => bold ? 900 : "normal"};
`
export const Image = styled.img`
    height: 100px;
    width: 20%;
    object-fit: contain;
`
export const Body = styled.div`
    height: 50%;
    padding: 10px;
`
export const Creator = styled.div`
    height: 10%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Select = styled.select`
    margin: 40px;
    font-size: 1.2rem;
    height: 2rem;
    min-width: 300px;
`
export const Option = styled.option``