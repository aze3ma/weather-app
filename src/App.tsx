import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

import { ThemeProvider } from 'theme-ui'

import { Container, Spinner } from 'theme-ui'
import Search from './components/Search'
import Empty from './components/Empty'
import WeatherDetails from './components/WeatherDetails'

import { fetchWeatherByCity } from './slices/weatherSlice'
import { QueryParams } from './types'

import theme from './theme'

const App: React.FunctionComponent = (): React.ReactElement => {
    const { data, loading, error } = useSelector((state) => state.weather)
    const dispatch = useDispatch()

    const searchHandler = (values: QueryParams): void => {
        dispatch(fetchWeatherByCity(values))
    }

    return (
        <ThemeProvider theme={theme}>
            <Container px={6} py={6}>
                <Search searchHandler={searchHandler} />
                {data && <WeatherDetails {...data} />}
            </Container>
        </ThemeProvider>
    )
}

export default App
