import React, { FunctionComponent } from 'react'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import { DialogTitle } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

type Props = {
  title: string
  onConfirm: () => void
  onClose: () => void
  confirmButtonLabel: string
  cancelButtonLabel?: string
  actionIsDangerous?: boolean
} & DialogProps

const DialogConfirmation: FunctionComponent<Props> = props => {
  const {
    title,
    onConfirm,
    confirmButtonLabel,
    cancelButtonLabel,
    actionIsDangerous,
    onClose,
    children,
    ...dialogProps
  } = props

  return (
    <Dialog {...dialogProps} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      {children && <DialogContent>{children}</DialogContent>}
      <DialogActions>
        <Button onClick={onClose}>{cancelButtonLabel || 'Cancel'}</Button>
        {actionIsDangerous ? (
          <DangerousActionButton variant='contained' onClick={onConfirm}>
            {confirmButtonLabel}
          </DangerousActionButton>
        ) : (
          <Button variant='contained' onClick={onConfirm} color='primary'>
            {confirmButtonLabel}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

const DangerousActionButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText
    }
  })
)(Button)

export default DialogConfirmation
