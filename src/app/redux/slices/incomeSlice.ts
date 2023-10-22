'use client'

import { createSlice } from '@reduxjs/toolkit'
import { Income } from '@/app/income/model/Income.class'

const incomes: Income[] = []

const incomeSlice = createSlice({
  name: 'income',
  initialState: { incomes },
  reducers: {
    addIncome: (state, action) => {
      state.incomes.push({ ...action.payload })
    },
    setIncomes: (state, action) => {
      state.incomes.push(...action.payload)
    }
  }
})

export const { addIncome, setIncomes } = incomeSlice.actions
export default incomeSlice.reducer
