import { ReactNode } from 'react'
import { Box, Container, ContainerProps } from '@material-ui/core'

type Props = {
  children: ReactNode
  marginTop?: number
  marginBottom?: number
} & Pick<ContainerProps, 'maxWidth'>

const Wrapper = ({
  children,
  maxWidth = 'md',
  marginTop = 3,
  marginBottom = 5
}: Props) => {
  return (
    <Container maxWidth={maxWidth}>
      <Box mt={marginTop} mb={marginBottom}>
        {children}
      </Box>
    </Container>
  )
}

export default Wrapper
