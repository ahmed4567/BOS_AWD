import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { json } from 'react-router-dom';


const  createData= (
  name ,
  الشركة ,
  وزن ,
  سعر ,
  كمية ,
)=> {
  return { name,الشركة, وزن, سعر, كمية };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Serchbar() {
  const [input , setInput] = useState("")

  const feachData = (value)=>{
    console.log("in")
    fetch("/data/playground-2.mongodb.js")
      .then(response => response.json())
      .then((json) => {console.log(json)
        /*const result = json.filter((user)=>{
        return user && user.name && user.name.toLowerCase().includes(value)
        }*/})
        
      
  }
  const handelChanges = (value)=>{
    setInput(value)
    feachData(value)
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" , height: 50}}
    >

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="بحث عن منتج"
        inputProps={{ 'aria-label': 'search google maps' }}
        value = {input}
        onChange={(event)=> handelChanges(event.target.value)}
      />
       <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
     
     
    </Paper>
  );
}
