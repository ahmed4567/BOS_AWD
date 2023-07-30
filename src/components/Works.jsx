import { motion, spring } from "framer-motion"
import { SectionWrapper } from "../hoc"
import {CheckOuttable,Controles} from './index'
import {Serchbar} from "../components"
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Works = () => {
  const [post , setPost] = useState({
      title :"",
      body : ""
  })
  const handleSend = (event)=>{
    setPost({...post,[event.target.name]:event.target.event})
  }
  return (
      <>
       <div className=" relative w-[50%] ml-[25%] mt-5">
    <Serchbar />
    </div>
      <motion.div>
           <div className="grid grid-cols-3 gap-2 grid-rows-1 mx-[10%] w-fit h-[50%]">
            <div className=" col-span-2 h-96 w-fit">
              <CheckOuttable/>  
              <div className="mx-[25%]">
              <Stack direction="row" spacing={10}>
              <Button variant="contained" color="success" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="contained"  endIcon={<SendIcon />}>
                Send
              </Button>
              </Stack>
              </div>
            </div>
            <div className="mt-5 ">
            <Controles/>
            </div>
          </div>
      </motion.div>
      </>
    )
}

export default SectionWrapper(Works,"Work")