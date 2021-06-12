import { Box, Typography, TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import routes from './routes'
import Wrapper from '../components/Wrapper'
import AppBar from '../components/AppBar'
import { useForm } from 'react-hook-form'
import formErrorMessages from '../utils/formErrorMessages'

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ name: string }>()

  return (
    <>
      <AppBar
        title='fullstrapp'
        actions={
          <Button
            color='primary'
            size='small'
            component={Link}
            to={routes.signin}
            variant='contained'
          >
            Sign In
          </Button>
        }
      />
      <Wrapper>
        <Typography paragraph variant='h5'>
          Welcome to your new app!
        </Typography>

        <Typography paragraph variant='h5'>
          Don't forget to configure your firebase settings in{' '}
          <code>/src/firebase/firebase.ts</code>
        </Typography>

        <Box mt={6}>
          <Typography paragraph>
            This is an example form using react-hook-form
          </Typography>
        </Box>
        <form
          onSubmit={handleSubmit(vals => {
            console.log(vals)
            reset()
          })}
        >
          <TextField
            label='Enter your name'
            variant='outlined'
            fullWidth
            {...register('name', {
              required: formErrorMessages.required
            })}
            error={!!errors.name}
            helperText={errors.name?.message || ' '}
          />
          <Button type='submit' color='primary'>
            Submit
          </Button>
        </form>
      </Wrapper>
    </>
  )
}

export default Home
