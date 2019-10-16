import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

// https://material-ui.com/customization/themes/#themes

const theme = createMuiTheme({
  palette: {
    // primary: color1,
    // secondary: color2,
    // error: color3
  },
  overrides: {
    MuiToolbar: {
      gutters: {
        paddingLeft: 4,
        paddingRight: 4
      }
    }
  }
})

export default theme
