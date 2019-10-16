import React, { FunctionComponent, FormEvent, ReactNode } from 'react'
import Dialog, { DialogProps } from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AppBarTitle from '../AppBarTitle'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

type Props = {
  title: string
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  onClose: () => void
  children: ReactNode
  submitLabel?: string
  cancelLabel?: string
  appBarButton?: ReactNode
} & DialogProps

const DialogForm: FunctionComponent<Props> = props => {
  const classes = useStyles()
  const {
    submitLabel = 'Submit',
    cancelLabel = 'Cancel',
    title,
    onSubmit,
    onClose,
    children,
    appBarButton,
    fullScreen,
    ...rest
  } = props

  return (
    <Dialog {...rest} onClose={onClose} fullScreen={fullScreen}>
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete='off'
        className={classes.form}
      >
        {fullScreen && (
          <AppBar position='sticky'>
            <Toolbar>
              <IconButton onClick={onClose} color='inherit'>
                <CloseIcon />
              </IconButton>

              <AppBarTitle>{title}</AppBarTitle>

              {appBarButton || (
                <Button color='inherit' type='submit' size='small'>
                  {submitLabel}
                </Button>
              )}
            </Toolbar>
          </AppBar>
        )}

        {!fullScreen && <DialogTitle>{title}</DialogTitle>}

        <DialogContent className={classes.dialogContent}>
          {children}
        </DialogContent>

        {!fullScreen && (
          <DialogActions>
            <Button onClick={onClose}>{cancelLabel}</Button>
            <Button color='primary' variant='contained' type='submit'>
              {submitLabel}
            </Button>
          </DialogActions>
        )}
      </form>
    </Dialog>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogContent: {
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3)
      }
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    }
  })
)

export default withMobileDialog<Props>()(DialogForm)
