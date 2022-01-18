import createTheme from '@mui/material/styles/createTheme'
import { grey } from '@mui/material/colors'

// https://mui.com/customization/theming/#themes

const theme = createTheme({
  // palette: {
  //   primary: primaryColor
  // }
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: grey[50]
        }
      }
    }
  }
})

export default theme
