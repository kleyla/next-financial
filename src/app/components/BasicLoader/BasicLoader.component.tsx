import React from 'react'
import { CircularProgress } from '@mui/material'
import './BasicLoader.component.css'

interface BasicLoaderProps {
  isLoading?: boolean
}

const BasicLoader = ({
  isLoading = true
}: BasicLoaderProps): React.JSX.Element => {
  return (
    <>
      {isLoading
        ? <CircularProgress
          size={50}
          className='loading'
        />
        : null}
    </>
  )
}

export default BasicLoader
