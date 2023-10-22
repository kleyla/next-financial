'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import incomeSlice from './slices/incomeSlice'
import expenseSlice from './slices/expenseSlice'

const rootReducer = combineReducers({
  income: incomeSlice,
  expense: expenseSlice
})

const store = configureStore({
  reducer: rootReducer
})

export default store

export type IRootState = ReturnType<typeof rootReducer>
