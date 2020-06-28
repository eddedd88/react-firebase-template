/**
 * Functions to resize the window and test app responsiveness
 */

const toSmallScreen = () => {
  // smaller mobile phone
  window.resizeTo(375, 667)
}

const toLargeScreen = () => {
  // laptop screen
  window.resizeTo(1440, 900)
}

export default {
  toSmallScreen,
  toLargeScreen
}
