// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const customDarkTheme = {
  dark: true,
  colors: {
    background: "#E3F2FD",
    surface: "#15202b",
    primary: "#1A237E",
    primary1: "#311B92",
    secondary: "#5C6BC0",
    error: "#D50000",
  },
};

const customLightTheme = {
  dark: false,
  colors: {
    background: "#E3F2FD",
    surface: "#15202b",
    primary: "#1A237E",
    primary1: "#311B92",
    secondary: "#5C6BC0",
    error: "#D50000",
  },
};

export default createVuetify(
  {
    ssr: true,
    theme: {
      defaultTheme: "light",
      themes: {
        customDarkTheme,
        customLightTheme,
      },
    },
  }
)
