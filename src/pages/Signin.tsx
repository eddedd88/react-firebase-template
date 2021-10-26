import { Typography } from '@material-ui/core'
import AppBar from '../components/AppBar'
import routes from './routes'
import Wrapper from '../components/Wrapper'

const Signin = () => {
  return (
    <>
      <AppBar title='Signin' linkBackTo={routes.home} />
      <Wrapper>
        <Typography variant='h3'>Coming soon</Typography>
      </Wrapper>
    </>
  )
}

export default Signin
