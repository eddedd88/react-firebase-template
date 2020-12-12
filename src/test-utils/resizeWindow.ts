const toSmallScreen = () => {
  // smaller mobile phone
  window.resizeTo(375, 667)
}

const toLargeScreen = () => {
  // laptop screen
  window.resizeTo(1440, 900)
}

const resizeWindow = {
  toSmallScreen,
  toLargeScreen
}

export default resizeWindow
