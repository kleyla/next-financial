'use client'

import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import TypeRecord from '@/app/common/enum/typeRecord'
import { Expense } from '@/app/expense/model/expense.class'
import { Income } from '@/app/income/model/Income.class'
import { Record } from '@/app/common/models/record.model'

type RecordsProps = {
  type: TypeRecord
  data: Expense[] | Income[] | Record[]
}

const TableRecords = ({ type, data }: RecordsProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nro.</TableCell>
            <TableCell align="center">Descripcion</TableCell>
            <TableCell align="center">Monto</TableCell>
            {type === TypeRecord.expense && (
              <TableCell align="center">Tipo</TableCell>
            )}
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">User id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              {type === TypeRecord.expense && (
                <TableCell align="right">
                  {row.expenseType || 'Varios'}
                </TableCell>
              )}
              <TableCell align="right">{row.date.split('T')[0]}</TableCell>
              <TableCell align="right">{row.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableRecords
