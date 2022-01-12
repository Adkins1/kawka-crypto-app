import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import numeral from 'numeral'
import { HiCurrencyDollar } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import {
    Container,
    Wrapper,
    Title,
    Row,
    Paragraph,
    Options,
    Option,
    Col,
    Image,
    Details,
    SubDetails,
    Select,
    Description
} from './CryptoDetailsStyles'
//import LineChart from './LineChart'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoApi'
import LineChart from '../LineChart/LineChart'

const CryptoDetails = () => {

    const { coinId } = useParams()
    const [timePeriod, setTimePeriod] = useState('7d')
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod })
    const cryptoDetails = data?.data?.coin

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && numeral(cryptoDetails?.price).format('0.0a')}`, icon: <HiCurrencyDollar /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <HiCurrencyDollar /> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.volume && numeral(cryptoDetails?.volume).format('0.0a')}`, icon: <HiCurrencyDollar /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && numeral(cryptoDetails?.marketCap).format('0.0a')}`, icon: <HiCurrencyDollar /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && numeral(cryptoDetails?.allTimeHigh?.price).format('0.0a')}`, icon: <HiCurrencyDollar /> },
    ];

    const otherStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <HiCurrencyDollar /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <HiCurrencyDollar /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <HiCurrencyDollar /> : <HiCurrencyDollar />, icon: <HiCurrencyDollar /> },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && numeral(cryptoDetails?.supply?.total).format('0.0a')}`, icon: <HiCurrencyDollar /> },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && numeral(cryptoDetails?.supply?.circulating).format('0.0a')}`, icon: <HiCurrencyDollar /> },
    ];

    if (isFetching) return 'Loading...'

    return (
        <Container>
            <Wrapper>
                <Row>
                    <Details>
                        <Title fontSize={2}>{cryptoDetails?.name} ({cryptoDetails?.symbol}) Price</Title>
                        <Image src={cryptoDetails.iconUrl}/>
                        <Title fontSize={1.5}>Price: {numeral(cryptoDetails?.price).format("0.0")}$</Title>
                    </Details>
                </Row>
                <Row>
                    <SubDetails>
                        <Col>
                            <Title fontSize={1.5}>{cryptoDetails?.name} Value Statistics</Title>
                            {
                                stats.map(({ icon, title, value}, i) => (
                                    <Paragraph key={i}>{icon}{title}: {value}</Paragraph>
                                ))
                            }
                        </Col>
                        <Col>
                            <Title fontSize={1.5}>Other Statistics</Title>
                            {
                                otherStats.map(({ icon, title, value}, i) => (
                                    <Paragraph key={i}>{icon}{title}: {value}</Paragraph>
                                ))
                            }
                        </Col>
                    </SubDetails>
                </Row>
                <Row>
                    <Options>
                            <Select defaultValue="7d" onChange={e => setTimePeriod(e.target.value)}>
                                {
                                    time.map((date) => (
                                        <Option key={date}>{date}</Option>
                                    ))
                                }
                            </Select>
                    </Options>
                </Row>
                <Row>
                    <LineChart
                        coinHistory={coinHistory}
                        currentPrice={cryptoDetails?.price}
                        coinName={cryptoDetails?.name}
                    />
                </Row>
                <Row>
                    <SubDetails>
                        <Col>
                            <Title fontSize={2}>
                                What is {cryptoDetails?.name}
                            </Title>
                            <Description>
                                {
                                    cryptoDetails?.description && HTMLReactParser(cryptoDetails?.description)
                                }  
                            </Description>
                        </Col>
                        <Col>
                            <Title fontSize={2}>
                                {cryptoDetails?.name} Links
                            </Title>
                            <Description>
                                {
                                    cryptoDetails?.links.map((link, i) => (
                                        <div key={i}>
                                            <h3>{link.type}</h3>
                                            <a href={link.url}>{link.name}</a>
                                        </div>
                                    ))
                                }        
                            </Description>
                        </Col>
                    </SubDetails>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default CryptoDetails
