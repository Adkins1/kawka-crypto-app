import React, { useState } from 'react'
import moment from 'moment'
import numeral from 'numeral'
import {
    Container,
    GridRow,
    Header,
    Paragraph,
    Image,
    Body,
    Creator,
    Select,
    Option
} from './CryptoNewsStyles'


import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../../services/cryptoApi'


const demoImage = 'https://public.bnbstatic.com/image/cms/blog/20210204/3683a369-8278-486f-bb96-dabde2e5c025.jpg'

const CryptoNews = ({ simplified }) => {

    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: newsCategory, count: simplified ? 6 : 12 })
    const { data } = useGetCryptosQuery(100)

    if (!cryptoNews?.value) return 'Loading...'

    return (
        <>
            {
                !simplified && (
                    <Select
                        placeholder="Select a Crypto"
                        onChange={e => setNewsCategory(e.target.value)}
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {
                            data?.data?.coins.map((coin, i) => <Option value={coin.name} key={i}>{coin.name}</Option>)
                        }
                    </Select>
                )
            }
            <GridRow columns={4} gap={40}>
                {
                    cryptoNews.value.map((news, i) => (
                        <Container key={i}>
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <Header>
                                    <Paragraph bold>{news.name}</Paragraph>
                                    <Image src={news.image?.thumbnail.contentUrl || demoImage}></Image>
                                </Header>
                                <hr />
                                <Body>
                                    <Paragraph>
                                        {
                                            news.description > 100
                                                ? `${news.description.substring(0, 100)} ...`
                                                : news.description
                                        }
                                    </Paragraph>
                                </Body>
                                <Creator>
                                    <Image style={{ width: '40px', height: '40px' }} src={news.provider[0].image?.thumbnail.contentUrl || demoImage}></Image>
                                    <Paragraph>{news.provider[0]?.name} </Paragraph>
                                    <Paragraph>{moment(news.datePublished).startOf('ss').fromNow()} </Paragraph>
                                </Creator>
                            </a>
                        </Container>
                    ))
                }
            </GridRow>
        </>
    )
}

export default CryptoNews
