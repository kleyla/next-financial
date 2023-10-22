import React from 'react'
import Image from 'next/image'
import { Typography, Modal, Box } from '@mui/material'

import TypeModal from '@/app/common/enum/typeModal'
import type ModalSuccessProps from '@/app/common/models/ModalSuccessProps'
import iconError from '../../../assets/icon/error.svg'
import iconSuccess from '../../../assets/images/success.png'
import './ModalSuccess.component.css'

export default function ModalSuccess({
  isOpen,
  type,
  text,
  textPrimary,
  onHandlePrimary,
  textSecondary,
  onHandleSecondary
}: ModalSuccessProps): React.JSX.Element {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onHandlePrimary}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <div style={{ width: '100%' }}>
            <Image
              className="modal-image"
              src={type === TypeModal.sucess ? iconSuccess : iconError}
              alt="registro exitoso"
            />
            <Typography
              variant="h6"
              id="modal-modal-description"
              sx={{ mt: 2, mb: 2 }}
            >
              {text}
            </Typography>
            <button className="btn-repeat" onClick={onHandlePrimary}>
              {textPrimary}
            </button>
            <button className="btn-redirect" onClick={onHandleSecondary}>
              {textSecondary}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
