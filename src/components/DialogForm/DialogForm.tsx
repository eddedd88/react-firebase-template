import React, { FunctionComponent, FormEvent, ReactNode } from 'react'
import AppBarTitle from '../AppBarTitle'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import {
  AppBar,
  Dialog,
  DialogProps,
  DialogActions,
  DialogTitle,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery
} from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column'
    }
  })
)

type Props = {
  title: string
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  onClose: () => void
  children: ReactNode
  submitLabel?: string
  cancelLabel?: string
  appBarSubmitButton?: ReactNode
} & DialogProps

const DialogForm: FunctionComponent<Props> = props => {
  const fullScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  )
  const classes = useStyles()
  const {
    submitLabel = 'Save',
    cancelLabel = 'Cancel',
    title,
    onSubmit,
    onClose,
    children,
    appBarSubmitButton,
    ...rest
  } = props

  return (
    <Dialog
      {...rest}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth={!fullScreen}
    >
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete='off'
        className={classes.form}
      >
        {fullScreen && (
          <AppBar position='sticky'>
            <Toolbar>
              <IconButton edge='start' onClick={onClose} color='inherit'>
                <CloseIcon titleAccess='Close' />
              </IconButton>

              <AppBarTitle>{title}</AppBarTitle>

              {appBarSubmitButton || (
                <Button color='inherit' type='submit' size='small'>
                  {submitLabel}
                </Button>
              )}
            </Toolbar>
          </AppBar>
        )}

        {!fullScreen && <DialogTitle>{title}</DialogTitle>}

        {children}

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

export default DialogForm
