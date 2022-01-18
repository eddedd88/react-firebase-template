import { ReactNode } from 'react'
import { Box, Container, ContainerProps } from '@mui/material'

type Props = {
  children: ReactNode
  marginTop?: number
  marginBottom?: number
} & Partial<Pick<ContainerProps, 'maxWidth'>>

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
