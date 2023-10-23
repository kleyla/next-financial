'use client'

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootState } from '@/app/redux'
import { fetchData } from '@/app/common'
import TypeRecord from '@/app/common/enum/typeRecord'
import { setIncomes } from '../redux/slices/incomeSlice'
import { OverlayLoader, SnackbarMessage, TableRecords } from '../components'
import styles from './page.module.css'
import { useSnackbar } from '../hooks'

const Income = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { incomes } = useSelector((state: IRootState) => state.income)
  const dispatch = useDispatch()
  const { isOpenSnackbar, closeSnackbar, setIsOpenSnackbar } = useSnackbar()

  const getIncomes = async () => {
    fetchData('financialHistory', 'GET')
      .then(res => {
        // setIncome(res)
        const data = res.filter(item => item.type === TypeRecord.income)
        dispatch(setIncomes(data))
      })
      .catch(error => {
        setIsOpenSnackbar(true)
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }
  useEffect(() => {
    getIncomes()
    return () => {}
  }, [])

  return (
    <>
      <OverlayLoader isLoading={isLoading} />
      <div className={styles.container}>
        <h1>Historial de ingresos</h1>
        <h4>Datos registrados</h4>
        <TableRecords type={TypeRecord.income} data={incomes} />
      </div>
      <SnackbarMessage
        isOpen={isOpenSnackbar}
        text="Error al obtener los datos!"
        onClose={closeSnackbar}
        type="error"
      />
    </>
  )
}

export default Income
