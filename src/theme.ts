import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import grey from '@material-ui/core/colors/grey'

// https://material-ui.com/customization/themes/#themes

const theme = createMuiTheme({
  palette: {
    // primary: primaryColor
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: grey[50]
      }
    }
  }
})

export default theme
