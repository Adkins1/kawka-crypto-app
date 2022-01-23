import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import moment from 'moment';
import { 
    Container,
    Row
} from './LineChartStyles';

const LineChart = ({ coinHistory }) => {

    const coinPrice = []
    const coinTimestamp = []

    for (let i = coinHistory?.data?.history?.length-1; i >= 0 ; i -= 1) {
        coinPrice.push(coinHistory?.data?.history[i]?.price);
    }
    for (let i = coinHistory?.data?.history?.length-1; i >= 0; i -= 1) {
        coinTimestamp.push(moment.unix(coinHistory?.data?.history[i]?.timestamp).format('YYYY-MM-DD'))
    }
    console.log(coinTimestamp)
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }
    const options = {
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                },
            },
        },
    }

    return (
        <Container>
            <Row>
                <Line data={data} options={options} />
            </Row>
        </Container>
    )
}

export default LineChart
