import {
  Dialog,
  DialogProps,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core'

type Props = {
  text: string
  confirmLabel: string
  onConfirm: () => void
  onClose: () => void
  title?: string
  cancelLabel?: string
} & DialogProps

const DialogAlert = (props: Props) => {
  const {
    title,
    text,
    confirmLabel,
    onConfirm,
    cancelLabel,
    onClose,
    children,
    ...dialogProps
  } = props

  return (
    <Dialog {...dialogProps} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}

      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
        {children}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{cancelLabel || 'Cancel'}</Button>
        <Button variant='contained' onClick={onConfirm} color='primary'>
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogAlert
