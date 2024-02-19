import { configureStore } from '@reduxjs/toolkit'
import Reducer from './Reducer'
import { ThemeReducer } from './Reducer'
export const Store = configureStore({
    reducer: Reducer
})
export const ThemeStore = configureStore({
    reducer: ThemeReducer
})