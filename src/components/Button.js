import React from "react"
import styled, { css } from "@xstyled/styled-components"

const ButtonContainer = styled.button`
  background: transparent;
  border-radius: 11;
  border: 2;
  border-color: primary;
  margin: 0 3;
  padding: 1 3;
  color: primary;
`

const Button = ({ color, children }) => {
  return <ButtonContainer color={color}>{children}</ButtonContainer>
}

export default Button
