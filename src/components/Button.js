import React from "react"
import styled, { css } from "@xstyled/styled-components"
import { variant } from "@xstyled/system"

const ButtonContainer = styled.button`
  background: transparent;
  border-radius: 11;
  border: 2;
  margin: 0 3;
  padding: 1 3;
  font-size: 1.2em;
  ${variant({
    default: "primary",
    variants: {
      primary: css`
        color: primary;
        border-color: primary;
      `,
      secondary: css`
        color: secondary;
        border-color: secondary;
      `,
    },
  })}
`

const Button = ({ variant, children }) => {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}

export default Button
