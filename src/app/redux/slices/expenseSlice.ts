'use client'

import { createSlice } from '@reduxjs/toolkit'
import { Expense } from '@/app/expense/model/expense.class'

const expenses: Expense[] = []

const expenseSlice = createSlice({
  name: 'record',
  initialState: { expenses: expenses },
  reducers: {
    setExpenses: (state, action) => {
      state.expenses.push(...action.payload)
    },
  }
})

export const { setExpenses } = expenseSlice.actions
export default expenseSlice.reducer
