import React from "react"
import styled from "@xstyled/styled-components"

const Button = styled.button`
  background: transparent;
  border-radius: 11;
  border: 2;
  border-color: primary;
  color: primary;
  margin: 0 3;
  padding: 1 3;
`

const App = () => {
  return (
    <div>
      <Button>Try me</Button>
    </div>
  )
}
export default App
