import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { type AlertProps, AlertColor } from '@mui/material/Alert'

interface SnackbarProps {
  open: boolean
  type: AlertColor
  text: string
  onClose: () => void
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  }
)
const SnackbarMessage = ({
  open,
  type,
  text,
  onClose
}: SnackbarProps): JSX.Element => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarMessage
/* Error al obtener los datos! */
/* Datos obtenidos exitosamente! */
