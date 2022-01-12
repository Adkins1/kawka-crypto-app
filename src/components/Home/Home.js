import React from 'react'
import numeral from 'numeral'
import {
    Container,
    GridRow,
    TitleRow,
    Title,
    Paragraph,
    More
} from './HomeStyles'
import Crypto from '../Crypto/Crypto'
import CryptoNews from '../CryptoNews/CryptoNews'

import { useGetCryptosQuery } from '../../services/cryptoApi'

const Home = () => {

    const { data, isFetching } = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats

    if(isFetching) return 'Loading...'

    return (
        <Container>
            <TitleRow>
                <Title fontSize={2}>Basic Crypto Information</Title>
            </TitleRow>
            <GridRow columns={2} gap={10}>
                <Title fontSize={1} col={1} row={1}>Total number of Cryptocurrencies</Title>
                <Paragraph fontSize={1.5} col={1} row={2}>{numeral(globalStats.total).format('0.0a')}</Paragraph>
                <Title fontSize={1} col={1} row={3}>Total Market Cap</Title>
                <Paragraph fontSize={1.5} col={1} row={4}>{numeral(globalStats.totalMarketCap).format('0.0a')}$</Paragraph>
                <Title fontSize={1} col={1} row={5}>Total Markets</Title>
                <Paragraph fontSize={1.5} col={1} row={6}>{numeral(globalStats.totalMarkets).format('0.0a')}</Paragraph>
                <Title fontSize={1} col={2} row={1}>Total Exchanges</Title>
                <Paragraph fontSize={1.5} col={2} row={2}>{numeral(globalStats.totalExchanges).format('0.0a')}</Paragraph>
                <Title fontSize={1} col={2} row={3}>Total 24h Volume</Title>
                <Paragraph fontSize={1.5} col={2} row={4}>{numeral(globalStats.total24hVolume).format('0.0a')}$</Paragraph>
            </GridRow>
            <TitleRow> 
                <Title fontSize={2}>Top 10 Crytpocurrencies</Title>
                <More to='/cryptocurrencies'>Show More</More>
            </TitleRow>
            <Crypto simplified/>
            <TitleRow>
                <Title fontSize={2}>Latest Articles about Cryptocurrencies</Title>
                <More to='/news'>Show More</More>
            </TitleRow>
            <CryptoNews simplified/>
        </Container>
    )
}

export default Home
