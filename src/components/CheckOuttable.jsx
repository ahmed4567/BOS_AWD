import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { SectionWrapper } from "../hoc"
import Barcode from 'react-jsbarcode';
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

const CheckOuttable = ()=> {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>أسم المنتج </TableCell>
            <TableCell align="right">code</TableCell>
            <TableCell align="right">الشركة</TableCell>
            <TableCell align="right">وزن&nbsp;(g)</TableCell>
            <TableCell align="right">سعر&nbsp;(g)</TableCell>
            <TableCell align="right">كمية&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><Barcode value={row.name} className='w-[100px] h-[25%]'/></TableCell>
              <TableCell align="right">{row.الشركة}</TableCell>
              <TableCell align="right">{row.وزن}</TableCell>
              <TableCell align="right">{row.سعر}</TableCell>
              <TableCell align="right">{row.كمية}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default SectionWrapper(CheckOuttable,"CheckOuttable")