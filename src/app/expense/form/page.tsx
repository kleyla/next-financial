import React from 'react'
import FormExpense from '../FormExpense/FormExpense.component'

export default function Income(): React.JSX.Element {
  return (
    <div className="container">
      <h1>Registro de gasto</h1>
      <h4>Ingresa la información que desea registrar</h4>
      <FormExpense></FormExpense>
    </div>
  )
}
