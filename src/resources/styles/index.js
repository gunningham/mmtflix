export const WIDTHS = {
  DESKTOP_LARGE: 1440,
  DESKTOP_MIN: 992,
  TABLET_WIDTH: 769,
  MOBILE_MAX: 460
}

export const Theme = {
  colors: {
    primary: '#1e1e1e',
    secondary: '#2c2c2c',
    tertiary: '#ffffff'
  },
  media: {
    mobile: `min-width: ${WIDTHS.MOBILE_MAX}px`,
    mobileMax: `max-width: ${WIDTHS.MOBILE_MAX}px`,
    tablet: `min-width: ${WIDTHS.TABLET_WIDTH}px`,
    tabletMax: `max-width: ${WIDTHS.TABLET_WIDTH}px`,
    desktop: `min-width: ${WIDTHS.DESKTOP_MIN}px`,
    desktopMax: `max-width: ${WIDTHS.DESKTOP_MIN}px`,
    desktopLarge: `min-width: ${WIDTHS.DESKTOP_LARGE}px`
  }
}
