import type TypeModal from '../enum/typeModal'
type TypeTransaction = 'Ingreso' | 'Gasto'

interface ModalSuccessProps {
  isOpen: boolean
  type: TypeModal
  text: string
  textPrimary: string
  onHandlePrimary: () => void
  textSecondary?: string
  onHandleSecondary?: () => void
}

export default ModalSuccessProps
