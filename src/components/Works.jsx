import * as React from 'react';

import { motion, spring } from "framer-motion"
import { SectionWrapper } from "../hoc"
import {Controles} from './index'
import {Serchbar ,Navbar} from "../components"
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from './print/ComponentToPrint';
import Paper from '@mui/material/Paper';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Divider from '@mui/material/Divider';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import TextField from '@mui/material/TextField';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import { Alarm } from '@mui/icons-material';



const Works = () => {
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [rows, setRows] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [data, setData] = React.useState([])
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [input , setinput] = React.useState("")
  const {id} = useParams()
  const componentRef = React.useRef();
  
  const columns = [
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
  
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
              <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      } return [ 
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={handleDeleteClick(id)}
        color="inherit"
      />, <GridActionsCellItem
          icon={<EditIcon />}
          label="print"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />,];
    },},
    { field: '_id', headerName: 'ID', width: 70 ,editable: false},
    { field: 'Iname', headerName: 'أسم المنتج', width: 100 ,editable: false},
    { field: 'SPrice',headerName: 'سعر ',type: 'number',width: 90,editable: false},
    { field: 'qunt',headerName: 'الكمية',width: 90,editable: true}
  ];
  
  const handelChanges = (value)=>{
    setinput(value)
    console.log(value)
  }
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
  useEffect(() => {
    itemLestUpdate();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const newCart =[]
  useEffect(() => {
    let newTotalAmount = 0;
    cart.forEach(icart => {
      newTotalAmount = newTotalAmount + parseInt(icart.qunt) * parseInt(icart.SPrice) ;
    })
    setTotalAmount(newTotalAmount);
  },[cart])
  const {_id, Iname,
    description,
    SPrice ,
    BPrice,
    companuName,
    wight , 
    lingth ,
    amount ,
    Exdate ,
    creator } = data
  const itemLest = data
  const addItem= async () =>{
    console.log("clike")
    console.log(itemLest)

    const target = document.getElementById('mySerch').value
    console.log(target)
      const item =  itemLest.find((row)=> row._id === target|| row.Iname ===target)
      const findIteminCart = cart.find(i => { return i._id === item._id})
      console.log(findIteminCart)
      if(findIteminCart){
        console.log('triger')
        var newItem = {}
        cart.forEach(cartItem =>{
          if(cartItem._id === item._id){
            console.log("loop triger")
           newItem={
            ...cartItem,
            qunt : parseInt(cartItem.qunt) +1,
           }
           console.log(newItem)
           newCart.push(newItem)
           setCart(newCart)
           console.log(cart)
          }})}else if (item !== undefined){
            newItem={
              ...item,
              qunt : 1,
              seler:id
            }
            console.log(newItem)
            setCart([...cart , newItem])
            console.log(cart)
        }else{
  alert("item not found")
  }
}
  

  const handleDeleteClick = (id) => () => {
    setRows(cart.filter((row) => row._id !== id));
    setCart(rows)
  }
  const  handleSaveClick =  (id) => async () => {
    await setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };
  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });    
  };
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
   const processRowUpdate = async (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    await setRows(cart.map((row) => (row._id === newRow._id ? updatedRow : row)));
    setCart(rows)
  };
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };
  
  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handelPrint = async () => {
    console.log('print',cart)
    await handleReactToPrint();
    alert("تم طباعة الفاتورة بنجاح")

  }

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
    </div>
      <motion.div>
           <div className="grid grid-cols-3 gap-2 grid-rows-1 mx-[10%] w-fit h-[50%]">
            <div className=" col-span-2 h-96 w-fit">
               <div className=' items-center'>
    <Paper
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" , height: 50, margin:"5px 0px 5px 0px"}}
  >
    <TextField fullWidth label="بحث عن منتج"  id="mySerch"
          defaultValue=""
          variant="standard" 
          /> <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    <IconButton sx={{ p: '10px' }}>
      <AddBoxRoundedIcon  onClick={addItem}/>
    </IconButton>
   
   
  </Paper>

    <DataGrid
    className=' bg-prussianBlue-50'
    getRowId={(cart) => cart._id}
    rows={cart}
    columns={columns}
    editMode="row"
    rowModesModel={rowModesModel}
    onRowModesModelChange={handleRowModesModelChange}
    onRowEditStop={handleRowEditStop}
    processRowUpdate={processRowUpdate}
  
    slotProps={{
      toolbar: { setRows, setRowModesModel },
    }}
  />
  <h2 className=' text-center font-semibold  stroke-black'>اجمالى الفاتورة = {totalAmount}</h2>
  </div>
              <div className="mx-[25%]">
              <Stack direction="row" spacing={10}>
              <Button variant="contained" color="success" onClick='window.location.reload()' startIcon={<DeleteIcon />}>
                الغاء
              </Button>
              <Button variant="contained" onClick={handelPrint} endIcon={<SendIcon />}>
                بيع 
              </Button>
              </Stack>
              </div>
            </div>
            <div className="mt-5 ">
            <Controles/>
            </div>
          </div>
          <div >
                <ComponentToPrint cart={cart} totalAmount={totalAmount} ref={componentRef}/>
              </div>
      </motion.div>
      </>
    )
}

export default SectionWrapper(Works,"Work")