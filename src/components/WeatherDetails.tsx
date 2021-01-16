import React from 'react'
import { Flex, Box, Heading, Text } from 'theme-ui'
import {
    WiDirectionDown,
    WiDirectionUp,
    WiCelsius,
    WiFahrenheit,
    WiDaySunny,
    WiDaySunnyOvercast,
    WiRain,
    WiSnow,
    WiCloudy,
} from 'weather-icons-react'

import { APIData } from '../types'

type IProps = APIData

const WeatherDetails: React.FC<IProps> = (props: APIData): React.ReactElement => {
    const iconGenerator = () => {
        switch (props.weather.summary.title.toLocaleLowerCase()) {
            case 'clouds':
                return <WiCloudy size={140} />
            case 'rain':
                return <WiRain size={140} />
            case 'snow':
                return <WiSnow size={140} />

            default:
                return <WiCloudy size={140} />
        }
    }

    return (
        <Box py={5}>
            <Heading marginBottom={2} sx={{ fontSize: 34, textTransform: 'uppercase' }}>
                <Flex sx={{ alignItems: 'center' }}>
                    {props.name}
                    <Text sx={{ fontWeight: 'normal', fontSize: 24, paddingLeft: 1 }}>,{props.country}</Text>
                </Flex>
            </Heading>
            <Flex sx={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <Box sx={{ marginLeft: -3 }}>{iconGenerator()}</Box>
                <Flex>
                    <Flex sx={{ flexDirection: 'column' }}>
                        <Heading sx={{ fontSize: 58, paddingLeft: 2 }}>
                            <span style={{ marginRight: '-15px' }}>{props.weather.temperature.actual}</span>
                            <WiCelsius size={64} />
                        </Heading>
                        <Flex sx={{ flexDirection: 'column', alignItems: 'center', marginRight: 4 }}>
                            <Flex sx={{ alignItems: 'center' }}>
                                <WiDirectionUp size={48} />
                                <Text sx={{ fontSize: 20 }}>{props.weather.temperature.min}</Text>
                                <WiDirectionDown size={48} />
                                <Text sx={{ fontSize: 20 }}>{props.weather.temperature.max}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Box sx={{ borderLeft: '8px solid', paddingLeft: 4, paddingY: 2 }}>
                        <Flex sx={{ flexDirection: 'column' }}>
                            <Text py={2}>
                                Humidity: <span style={{ fontWeight: 'bold' }}>{props.weather.clouds.humidity}</span>
                            </Text>
                            <Text py={2}>
                                Clouds: <span style={{ fontWeight: 'bold' }}>{props.weather.clouds.visibility}</span>
                            </Text>
                            <Text py={2}>
                                Wind: <span style={{ fontWeight: 'bold' }}>{props.weather.wind.speed}</span>
                            </Text>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default WeatherDetails
