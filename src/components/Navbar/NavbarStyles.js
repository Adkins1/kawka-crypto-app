import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { color, maxDevice } from '../variables'

export const Container = styled.div`
    position: relative;
    padding: 0 10px 0 10px;
    width: 100%;
    height: ${({ showMenu }) => showMenu ? "100vh" : "8vh"};
    flex-direction: ${({ showMenu }) => showMenu ? "column" : "row"};
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    background: ${color.darkBlue};
    @media screen and (${maxDevice.tablet}) {
        align-items: center;
    }
`
export const LogoLink = styled(LinkR)`
    width: 10%;
    height: 100%;
    transition: .2s;
    :hover{
        background: ${color.darkBlueHover};
    }
    @media screen and (${maxDevice.tablet}) {
        width: 30%;
        height: ${({ showMenu }) => showMenu ? "40%" : "100%"};
    }
`
export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const Links = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media screen and (${maxDevice.tablet}) {
        width: 100%;
        flex-direction: column;
    }
    a{
        @media screen and (${maxDevice.tablet}) {
            display: ${({ showMenu }) => showMenu ? "flex" : "none"};
            width: 100%;
            font-size: 2rem;
        }
    }
`
export const Link = styled(LinkR)`
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    font-size: 1.4rem;
    color: ${color.white};
    text-decoration: none;
    width: 20%;
    height: 100%;
    transition: .2s;
    :hover{
        background: ${color.darkBlueHover};
    }
    svg{
        font-size: 1.2em;
    }
    @media screen and (${maxDevice.laptop}) {
        font-size: 1rem;
        width: 30%;
    }
    
`
export const Hamburger = styled.div`
    display: none;

    @media screen and (${maxDevice.tablet}) {
        display: block;
        position: absolute;
        top: 30px;
        right: 30px;
        font-size: 1.8rem;
        cursor: pointer;
        transition: .2s;
        color: ${color.white};
        :hover{
            transform: scale(110%);
            transition: .2s;
        }
        @media screen and (${maxDevice.laptop}) {
            top: 15px;
            right: 15px;
        }
    }
`