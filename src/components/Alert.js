import React from "react"
import styled, { css } from "@xstyled/styled-components"
import { variant } from "@xstyled/system"

const AlertContainer = styled.div`
  border-radius: 7;
  padding: 16;
  margin: 1rem; 
  ${variant({
    variants: {
      info: css`
        color: info;
        background-color: bgInfo;
      `,
      error: css`
        color: error;
        background-color: bgError;
      `,
    },
  })}
`

const Alert = ({ variant, children }) => {
  return <AlertContainer variant={variant}>{children}</AlertContainer>
}

export default Alert
