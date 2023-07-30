import * as React from 'react';
import { SectionWrapper } from "../hoc"
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { useState , useEffect } from 'react';
import axios from 'axios';
import "../dashbord.css"

const Admindash = ()=> {
  const  [chartData , setCahrtData] = useState({})

  useEffect(()=>{
    const fechData = async () =>{
      const {data} = await axios.get("http://localhost:5173/setings/")
      console.log(data) 
      setCahrtData({
        labels : data.data.map((item))
      })
    }
    fechData()
  },[])
  return (
    <>
    mui
    <Box>
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 8">
        <div id = "monthlySales">

        </div> 
    </Box>
      <Box gridColumn="span 4">
      <Button variant="contained" color="primary"></Button>
      </Box>
      <Box gridColumn="span 4">
      <Button variant="contained" color="primary"></Button>
      </Box>
      <Box gridColumn="span 8">
      <Button variant="contained" color="primary"></Button>
      </Box>
    </Box>
  </Box>
  </>
  );
}
export default SectionWrapper(Admindash,"Admindash")