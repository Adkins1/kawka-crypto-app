import styled from "styled-components";
import { color, maxDevice } from "../variables";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 60vh;
    background: ${color.darkBlue};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const Links = styled.ul`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (${maxDevice.tablet}) {
        width: 100%;
        align-items: center;
    }
`
export const Link = styled(LinkR)`
    text-decoration: none;
    font-size: 2rem;
    color: ${color.white};
    padding: 5px;
    transition: .2s;
    :hover{
        font-size: 2.5rem;
        transition: .2s;
        background: ${color.darkBlueHover}
   }
   @media screen and (${maxDevice.tablet}) {
        font-size: 1rem;

        :hover{
            font-size: 1.5rem;
        }
    }
`
export const Media = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    @media screen and (${maxDevice.tablet}) {
        width: 100%;
        justify-content: center;
    }
`
export const Row = styled.div`
    min-height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media screen and (${maxDevice.tablet}) {
        flex-direction: column;
        gap: 0;
    }
`
export const Header = styled.div`
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    color: ${color.white};
    @media screen and (${maxDevice.tablet}) {
        font-size: 1rem;
    }
`
export const MediaLink = styled.a`
    font-size: 3rem;
    padding: 10px;
    text-decoration: none;
    color: ${color.white};
    transition: .2s;
    :hover{
        transition: .2s;
        background: ${color.darkBlueHover}
    }
`
export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const LogoLink = styled(LinkR)`
    width: 40%;
    height: 100%;
    transition: .2s;
    :hover{
        background: ${color.darkBlueHover};
    }
`