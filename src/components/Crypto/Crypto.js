import React, { useState, useEffect } from 'react'
import numeral from 'numeral'
import {
    Container,
    Header,
    Paragraph,
    Image,
    Body,
    GridRow,
    Input,
    InputContainer
} from './CryptoStyles'

import { useGetCryptosQuery } from '../../services/cryptoApi'

const Crypto = ({ simplified }) => {

    const count = simplified ? 10 : 100
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filteredData)
    }, [cryptosList, searchTerm])

    if (isFetching) return 'Loading...'

    return (
        <>
            {
                !simplified && (
                <InputContainer>
                    <Input placeholder='Search Cryptocurrency' onChange={e => setSearchTerm(e.target.value)} />
                </InputContainer>
                )
            }
            <GridRow columns={4} gap={40}>
                {
                    cryptos?.map((coin, i) => (
                        <Container key={i} to={`/crypto/${coin.uuid}`}>
                            <Header>
                                <Paragraph bold>{coin.rank}. {coin.name}</Paragraph>
                                <Image src={coin.iconUrl}></Image>
                            </Header>
                            <hr />
                            <Body>
                                <Paragraph>Price: {numeral(coin.price).format('0.0a')}$</Paragraph>
                                <Paragraph>Market cap: {numeral(coin.marketCap).format('0.0a')}$</Paragraph>
                                <Paragraph>Daily change: {numeral(coin.change).format('0.0a')}%</Paragraph>
                            </Body>
                        </Container>
                    ))
                }
            </GridRow>
        </>
    )
}

export default Crypto
