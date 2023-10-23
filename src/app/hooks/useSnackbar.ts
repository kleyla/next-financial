import React, { useState } from 'react'
import { AlertColor } from '@mui/material'

const useSnackbar = (
  isOpen: boolean = false,
  eventType: AlertColor = 'error',
  text: string = 'Error!'
) => {
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(isOpen)
  const [type, setType] = useState(eventType)
  const [label, setLabel] = useState(text)

  const setDataSnackbar = (isOpen: boolean, type: AlertColor, text: string) => {
    setIsOpenSnackbar(isOpen)
    setType(type)
    setLabel(text)
  }

  const closeSnackbar = () => {
    setIsOpenSnackbar(false)
  }
  return {
    isOpenSnackbar,
    eventType: type,
    text: label,
    setDataSnackbar,
    closeSnackbar,
    setIsOpenSnackbar
  }
}

export default useSnackbar
