import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  breakpoints: ["44em", "80em"],
  fonts: {
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, system-ui, sans-serif',
    mono: 'Poppins, system-ui, sans-serif'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    sm: '5px',
    md: '8px',
  },
  colors: {
    blue: {
      600: '#2962ff'
    },
  },
})

export default customTheme;