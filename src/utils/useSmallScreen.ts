import { useMediaQuery, Theme } from '@mui/material'

const useSmallScreen = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'), {
    noSsr: true
  })
}

export default useSmallScreen
