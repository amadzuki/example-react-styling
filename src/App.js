import React from "react"

import Button from "./components/Button"
import Alert from "./components/Alert"

const App = () => {
  return (
    <div>
      <Button>Try me default</Button>
      <Button variant="secondary">Try me again</Button>

      <Alert variant="info">You have a message</Alert>
      <Alert variant="error">Error! File not found</Alert>
    </div>
  )
}
export default App
