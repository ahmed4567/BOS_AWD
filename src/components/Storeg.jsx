import * as React from 'react';
import { SectionWrapper } from "../hoc"
import {SetingNav} from "../components"
import { useState , useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "../dashbord.css"
import "../barcode.css"
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CancelIcon from '@mui/icons-material/Close';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Barcode from "react-barcode"

const curentDate =  new Date().toLocaleString() + ""
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';

  
const Storeg = ()=> {
  const {id} = useParams()
  const dispatch = useDispatch();
  const [data , setData] = useState([])
  const [rows, setRows] = React.useState(null);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const componentRef = React.useRef(null)
  const [clikedID,setclikedID ] = useState(0)

  
  const handlePrint =  useReactToPrint({
    content: () => componentRef.current,
  });
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
        ];
      }return [
        <GridActionsCellItem
        icon={<LocalPrintshopIcon />}
        label="Print"
        sx={{
          color: 'primary.main',
        }}
        onClick={handlePrintClick(id)}
      />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="print"
          className="textPrimary"
          onClick={handleEditClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  },
  { field: '_id', headerName: 'ID', width: 70 ,editable: true},
  { field: 'Iname', headerName: 'أسم المنتج', width: 130 ,editable: true},
  {
    field: 'SPrice',
    headerName: 'سعر البيع',
    type: 'number',
    width: 90,
    editable: true
  },
  {
    field: 'BPrice',
    headerName: 'سعر الشراء ',
    type: 'number',
    width: 90,
    editable: true
},
{
  field: 'companuName',
  headerName: 'الشركة المصنعه ',
  width: 90,
  editable: true
},
{
  field: 'wight',
  headerName: 'وزن العبوه/نوع العبوة',
  width: 90,
  editable: true
},
{
  field: 'lingth',
  headerName: 'طول المنتج',
  width: 90,
  editable: true
},
{
  field: 'amount',
  headerName: 'المتاح بالمخزن',
  width: 90,
  editable: true
},
{
  field: 'Exdate',
  headerName: 'تاريخ الانتاج',
  width: 90,
  editable: true
},
{ field: 'description', headerName: 'وصف', width: 160,editable: true },
];

  

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
        await setclikedID(savedUser._id)
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
      handlePrint()
      document.getElementById("myform").reset();

    };
    useEffect(() => {
      itemLestUpdate();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
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
    const itemLest  = data
    console.log(itemLest)
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  const handlePrintClick = (id) => async() => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Print } });
    const editedRow = itemLest.find((row) => row._id === id);
    console.log("editedRow",editedRow)
    await setclikedID(editedRow._id)
    handlePrint()
  };
  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    itemLestUpdate();
  };
  
  const handleDeleteClick = (id) => () => {
    setRows(itemLest.filter((row) => row._id !== id));
    const editedRow = itemLest.find((row) => row._id === id);
    console.log(editedRow)
    const itemDelet =async (value)=>{
      console.log("fiching")
      const updatelest = await fetch(
        `http://localhost:8080/items/delet/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        }
      )
      const newItem = await updatelest.json();
            console.log(newItem)
    }
    itemDelet(editedRow)
    itemLestUpdate();
  }
  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });    
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(itemLest.map((row) => (row._id === newRow._id ? updatedRow : row)));
    console.log(id)
    console.log(updatedRow)
    const itmeEdit =async (value)=>{
      console.log("fiching")
      const updatelest = await fetch(
        `http://localhost:8080/items/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        }
      )
      const newItem = await updatelest.json();
            console.log(newItem)
    }
    itmeEdit(updatedRow)
    itemLestUpdate();
    
  };
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  return (
    <>
      
    <div className='flex min-h-[600px] my-2 gap-2'>
    <SetingNav/>
    <div className='p-[10px] text-center items-start w-[100%] bg-prussianBlue-950'>
    <div className=' w-full items-center h-min block'>
    <div ref={componentRef} class="pageStyle" className=' absolute barcode'><Barcode width={1} hight={40} value={clikedID} /></div>
                  
    <DataGrid
        className=' bg-prussianBlue-50'
        getRowId={(itemLest) => itemLest._id}
        rows={itemLest}
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
    </div>
    <div>
                
    <Container >
        <CssBaseline />
        <Box
          sx={{
            width : `100%`,
            marginTop: 1,
            flexDirection: 'column',
            alignItems:"center",
            backgroundColor:"whitesmoke",
            padding:"10px",
            borderRadius:"1%",
            border:"1px black",
            boxShadow:"5px 5px #2e294e",
            borderStyle:"solid"
          }}
        >
          <Typography    component="h1" variant="h5">
            Item Creating 
          </Typography>
          <Box component="form" id="myform" noValidate onSubmit={handleSubmit} sx={{ mt: 3,  }}>
           <div> <Grid className=' inline-block' container spacing={1}>
              <Grid item xs={20} sm={2.5}>
                <TextField
                  autoComplete="given-name"
                  name="SPrice"
                  inlineBlock
                  required
                  fullWidth
                  id="SPrice"
                  label="سعر البيع"
                  autoFocus
                />
              </Grid>
              <Grid item xs={20} sm={2.5}>
                <TextField
                  required
                  inlineBlock 
                  fullWidth
                  id="BPrice"
                  label="سعر الشراء"
                  name="BPrice"
                />
              </Grid>
              <Grid item xs={20} sm={2.5}>
                <TextField
                  required
                  fullWidth
                  id="Iname"
                  label="أسم المنتج"
                  name="Iname"
                  autoComplete="CPC"
                />
              </Grid>

               <Grid item xs={20} sm={2.5}>
                <TextField
                  required
                  fullWidth
                  id="companuName"
                  label="أسم الشركة"
                  name="companuName"
                  autoComplete="CPC"
                />
              </Grid>
              <Grid item xs={20} sm={2.5}>
                <TextField
                  required
                  fullWidth
                  name="wight"
                  label="وزن"
                  id="wight"
                />
              </Grid>
              <Grid item xs={20} sm={2.5}>
                <TextField
                  required
                  fullWidth
                  name="lingth"
                  label="طول"
                  id="lingth"
                />
              </Grid>
              <Grid item xs={20} sm={2.5}>
                <TextField
                  required
                  fullWidth
                  name="amount"
                  label="كمية"
                  id="amount"
                />
              </Grid>
              <Grid item xs={20} sm={2.5}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="وصف"
                  id="description"
                />
              </Grid>
            
            </Grid></div>
            <div className=' inline-block'>
             
              <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField']}>
        <DateField name='Exdate' label="تاريخ الانتاج" />
      </DemoContainer>
    </LocalizationProvider>
     </div>
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              أضافة
            </Button>
          </Box>
        </Box>
      </Container>
     </div>
    </div>
    </div>
  </>
  );
}
export default SectionWrapper(Storeg,"Storeg")