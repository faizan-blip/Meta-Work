import React from 'react'
import { Box } from '@mui/material'
import { DotLoader } from 'react-spinners'
const Spinner = () => {
  return (
    <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh"}}>
      <DotLoader color="#fff" />
    </Box>
  )
}

export default Spinner
