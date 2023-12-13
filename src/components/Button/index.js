import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

function Button({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}
