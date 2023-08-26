import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState , useEffect} from 'react';
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
];

export default function Serchbar() {



  const itemLestUpdate =async ()=>{
    console.log(id)
    const updatelest = await fetch(
      `http://localhost:8080/items/${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
    const savedLest = await updatelest.json();
    console.log(savedLest)
      if (savedLest !== null){
    setData(savedLest)}
    else{
      setData({})
    }
        
  }
  
  const ItemGeneretor = async (data)=>{
    const savedUserResponse = await fetch(
        `http://localhost:8080/items`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )
      const savedUser = await savedUserResponse.json();
        console.log(savedUser)
        itemLestUpdate();
    }
    const handleSubmit = (event) => { 
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const iData = {
        Iname : formData.get('Iname'),
        description:formData.get("description"),
        SPrice : formData.get(`SPrice`),
        BPrice:formData.get(`BPrice`),
        companuName:formData.get(`companuName`),
        wight : formData.get(`wight`), 
        lingth :formData.get(`lingth`),
        amount :formData.get(`amount`),
        Exdate :formData.get(`Exdate`),
        creator:id
        }
      ItemGeneretor(iData)
      printParcod(iData)
      document.getElementById("myform").reset();

    };
  const [input , setInput] = useState("")
  useEffect(() => {
    itemLestUpdate();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

 
  const handelChanges = (value)=>{
    setInput(value)
    itemLestUpdate(value)
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
