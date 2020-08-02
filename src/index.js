import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@xstyled/styled-components"

import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

const theme = {
  colors: {
    primary: "#ff6b6b",
    secondary: "#f06595",
    info: "#1971c2",
    bgInfo: "#a5d8ff",
    error: "#e03131",
    bgError: "#ffc9c9",
  },
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
