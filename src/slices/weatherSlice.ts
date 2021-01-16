import { createSlice, createAsyncThunk, AsyncThunkAction, AsyncThunk } from '@reduxjs/toolkit'
import API from '../utils/APIService'
import { GET_CITY_BY_NAME } from '../queries'
import { APIData, QueryParams } from '../types'

interface IState {
    loading: boolean
    error: string
    data: APIData
}

export const initialState = {
    loading: false,
    error: '',
    data: null,
}

export const fetchWeatherByCity: any = createAsyncThunk('weather/fetchWeatherByCity', (variables, thunkAPI) => {
    return API.request(GET_CITY_BY_NAME, variables).then((response) => {
        return response.getCityByName
    })
})

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchWeatherByCity.pending]: (state) => {
            state.loading = true
        },
        [fetchWeatherByCity.rejected]: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = ''
        },
        [fetchWeatherByCity.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
    },
})

export const weatherSelector = (state: IState): IState => state

export default weatherSlice.reducer
