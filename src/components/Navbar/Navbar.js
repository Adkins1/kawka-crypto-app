import React, { useEffect, useState } from 'react'
import {
    Container,
    Logo,
    Links,
    Link,
    LogoLink,
    Hamburger,
} from './NavbarStyles'
import LogoImg from '../../images/kawka_crypto.png'
import { AiFillHome } from 'react-icons/ai'
import { GrBitcoin } from 'react-icons/gr'
import { IoNewspaperSharp } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(()=>{
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const changeNav = () => {
        if(screenSize < 768){
            setShowMenu(!showMenu)
        }
    }


    return (
        <>
            <Container showMenu={showMenu}>
                <LogoLink to='/' >
                    <Logo src={LogoImg} />
                </LogoLink>
                <Links showMenu={showMenu}>
                    <Link to='/' onClick={changeNav}><AiFillHome />Home</Link>
                    <Link to='/cryptocurrencies' onClick={changeNav}><GrBitcoin />Cryptocurrencies</Link>
                    <Link to='/news' onClick={changeNav}><IoNewspaperSharp />News</Link>
                </Links>
                <Hamburger onClick={changeNav} ><GiHamburgerMenu /></Hamburger>
            </Container>
        </>
    )
}

export default Navbar
