import { theme as chakraTheme } from '@chakra-ui/core'


const breakpoints = ['40em', '52em', '64em']

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    coolcolor: "#ffe000",

    white: "#fffaff",
    black: "#000000",
    acert_blue: "#30bced",
    acert_gray: "#303036",
    acert_red: "#fc5130",
    acert_darkblue1: "#008bca",
    acert_darkblue2: "#005e99",
    primary: {
      50: "#fae9e8",
      100: "#fdcbbe",
      200: "#fca995",
      300: "#fc876c",
      400: "#fc6c4c",
      500: "#fc5230",
      600: "#f14c2c",
      700: "#e34627",
      800: "#d53f23",
      900: "#bb331b"
    },
    secondary: {
      50: "#def4fc",
      100: "#ace1f7",
      200: "#74cef2",
      300: "#30bbed",
      400: "#00adeb",
      500: "#009ee8",
      600: "#0091da",
      700: "#007ec7",
      800: "#006eb3",
      900: "#004e92"
    }
  

  },
  fonts: {
    body: "fira sans",
    heading: "fira sans",
    mono: "fira sans"
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  breakpoints,
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
}

export default theme