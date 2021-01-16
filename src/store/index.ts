import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import weatherSlice from '../slices/weatherSlice'

const store = configureStore({ reducer: { weather: weatherSlice }, middleware: [...getDefaultMiddleware()] })

export default store
