import React from 'react'
import {
    Container,
    Wrapper,
    Links,
    Link,
    Media,
    Row,
    Header,
    MediaLink,
    Logo,
    LogoLink
} from './FooterStyles'
import {
    FaFacebook,
    FaYoutube,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa'
import LogoImg from '../../images/kawka_crypto.png'

const Footer = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Container>
            <Wrapper>
                <Row>
                    <Header>
                        <LogoLink to='/'>
                            <Logo src={LogoImg} />
                        </LogoLink>
                        Kawka Crypto Site
                    </Header>
                </Row>
                <Row>
                    <Links>
                        <Link onClick={scrollTop} to='/'>Homepage</Link>
                        <Link onClick={scrollTop} to='/cryptocurrencies'>Cryptocurrencies</Link>
                        <Link onClick={scrollTop} to='/news'>News</Link>
                    </Links>
                    <Media>
                        <MediaLink href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></MediaLink>
                        <MediaLink href="https://www.youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></MediaLink>
                        <MediaLink href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></MediaLink>
                        <MediaLink href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></MediaLink>
                    </Media>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Footer
