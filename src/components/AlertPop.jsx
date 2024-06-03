import React from 'react'
import { Alert } from '@material-tailwind/react'

const AlertPop = ({error}) => {
  return (
    <Alert>{error}</Alert>
  )
}

export default AlertPop