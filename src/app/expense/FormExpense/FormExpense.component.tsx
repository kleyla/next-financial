'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { MenuItem, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
import dayjs from 'dayjs'

import transactionDescriptionType from '@/app/common/constants/TransactionDescriptionType.constant'
import { ModalSuccess, OverlayLoader, SnackbarMessage } from '@/app/components'
import TypeModal from '@/app/common/enum/typeModal'
import { useSnackbar } from '@/app/hooks'

import { type Expense } from '../model/expense.class'

import './FormExpense.component.css'
import { fetchData } from '@/app/common'
import { RoutesApp } from '@/app/constants/routes'

export default function FormExpense(): React.JSX.Element {
  const router = useRouter()
  const { isOpenSnackbar, eventType, text, setDataSnackbar, closeSnackbar } =
    useSnackbar()
  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const today = dayjs()
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Expense>({
    mode: 'onChange',
    defaultValues: {
      userId: 100,
      date: today
    }
  })

  const toggleModal = (): void => {
    setIsOpenModal(state => !state)
  }

  const handleRedirect = (): void => {
    setIsOpenModal(state => !state)
    router.push(RoutesApp.EXPENSE_RECORDS.path)
  }

  const onSubmit: SubmitHandler<Expense> = data => {
    setLoading(true)
    fetchData('financialHistory', 'POST', { ...data, type: 'gasto' })
      .then(result => {
        toggleModal()
        reset()
      })
      .catch(error => {
        setDataSnackbar(true, 'error', 'Error al obtener los datos!')
      })
      .finally(() => setLoading(false))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-content">
        <TextField
          label="Descripcion del Gasto"
          variant="standard"
          className="input"
          {...register('description', {
            required: { value: true, message: 'El nombre es requerido' },
            minLength: { value: 4, message: 'El minimo de caracteres es 4' }
          })}
          helperText={errors.description?.message}
        />

        <TextField
          select
          fullWidth
          variant="standard"
          label="Tipo de gasto"
          className="input"
          defaultValue=""
          inputProps={register('expenseType', {
            required: { value: true, message: 'Selecione una opcion' }
          })}
          error={errors.expenseType != null}
          helperText={errors.expenseType?.message}
        >
          <MenuItem value="">--Seleccione--</MenuItem>
          {transactionDescriptionType.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Monto total en Bs."
          className="input"
          type="number"
          variant="standard"
          {...register('amount', {
            required: { value: true, message: 'El monto es requerido' },
            valueAsNumber: true
          })}
          helperText={errors.amount?.message}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name="date"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label="Fecha de gasto"
                format="DD/MM/YYYY"
                value={dayjs(value)}
                onChange={onChange}
                className="input"
                slotProps={{
                  textField: {
                    variant: 'standard'
                  }
                }}
              />
            )}
          />
          {errors?.date != null && errors.date.type === 'required' && (
            <span className="error-msg">La fecha es requerida</span>
          )}
        </LocalizationProvider>

        <button type="submit" className="btn-secondary">
          Continuar
        </button>

        <OverlayLoader isLoading={loading} />
        <ModalSuccess
          isOpen={isOpenModal}
          onHandlePrimary={toggleModal}
          onHandleSecondary={handleRedirect}
          textPrimary="Nuevo Gasto"
          textSecondary="Ver Gastos"
          type={TypeModal.sucess}
          text="Registro Exitoso"
        />
      </form>
      <SnackbarMessage
        isOpen={isOpenSnackbar}
        type={eventType}
        text={text}
        onClose={closeSnackbar}
      />
    </>
  )
}
