'use client'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

import TypeRecord from '../common/enum/typeRecord'
import { fetchData } from '../common'
import { IRootState } from '../redux'
import { setExpenses } from '../redux/slices/expenseSlice'
import { OverlayLoader, SnackbarMessage, TableRecords } from '../components'
import { RoutesApp } from '../constants/routes'
import styles from './page.module.css'
import { useSnackbar } from '../hooks'

const Expense = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { expenses } = useSelector((state: IRootState) => state.expense)
  const dispatch = useDispatch()
  const router = useRouter()
  const { isOpenSnackbar, closeSnackbar, setIsOpenSnackbar } = useSnackbar()

  const getIncomes = async () => {
    fetchData('financialHistory', 'GET')
      .then(res => {
        const data = res.filter(item => item.type === TypeRecord.expense)
        dispatch(setExpenses(data))
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

  const redirectAddExpense = () => {
    router.push(RoutesApp.EXPENSE_FORM.path)
  }

  return (
    <>
      <OverlayLoader isLoading={isLoading} />
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <div className={styles.containerHeaderText}>
            <h1>Historial de gastos</h1>
            <h4>Datos registrados</h4>
          </div>

          <button
            type="button"
            onClick={redirectAddExpense}
            className={styles.btnSecondary}
          >
            Agregar
          </button>
        </div>
        <TableRecords type={TypeRecord.expense} data={expenses} />
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

export default Expense
