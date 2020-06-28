import { useMediaQuery, Theme } from '@material-ui/core'

const useSmallScreen = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'), {
    noSsr: true
  })
}

export default useSmallScreen
