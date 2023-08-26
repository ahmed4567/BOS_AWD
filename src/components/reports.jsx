import * as React from 'react';
import { SectionWrapper } from "../hoc"
import {SetingNav,Serchbar} from "../components"
import { useState , useEffect } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import Settings from '@mui/icons-material/Settings';

import Divider from '@mui/material/Divider';


import { DataGrid} from '@mui/x-data-grid';

import axios from 'axios';
import "../dashbord.css"
import { Container } from 'postcss';
const curentDate =  new Date().toLocaleString() + ""

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
  },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
   ];
  
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },]  
  
const Reports = ()=> {
  const  [chartData , setCahrtData] = useState({})

  
  /*useEffect(()=>{
    const fechData = async () =>{
      const {data} = await axios.get("http://localhost:5173/setings/")
      console.log(data) 
      setCahrtData({
        labels : data.data.map((item))
      })
    }
    fechData()
  },[])*/
  return (
    <>
    <div className='flex min-h-[600px] my-2 mx-[5px] gap-2'>
    <SetingNav/>
    <div className=' p-[10px] text-center items-center w-[100%] bg-prussianBlue-950'>
    <div className=' p-[5px] m-auto'> 
    <ButtonGroup aria-label="outlined primary button group" color="primary" variant="solid">
      <Button disabled><LocalPrintshopIcon/>طباعه</Button>
      <Button disabled><FindInPageIcon/>معاينة قبل الطباعه</Button>
      <Button disabled><PictureAsPdfIcon/>احفظ PDF</Button>
      <Button disabled><EditIcon/>تعديل</Button>
      <Button disabled><SaveIcon/>حفظ</Button>
    </ButtonGroup>
    </div>
    <div className='w-[50%] inline-block'>zzzzzz</div>
    <div className='w-[50%] inline-block'>zzzzzzzz  </div>
    </div>
   
    </div>
  </>
  );
}
export default SectionWrapper(Reports,"Reports")