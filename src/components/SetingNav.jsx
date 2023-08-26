import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SetingNav = () =>{
  const {id} = useParams()
  const myLinks = [
    {
      text : 'لوحة القيادة',
      id : `/user/${id}/settings/`
    },
    {
      text : 'مستندات',
      id :`/user/${id}/settings/docs`
    },
    {
      text : 'المخزن الرئيسى',
      id : `/user/${id}/settings/storeg`
    }, 
    {
      text : 'تقارير' ,
      id : `/user/${id}/settings/reports`
    },  
    {
      text : 'الكاشير' ,
      id : `/user/${id}/home`
    }
  ]
  return(
  <div className=' bg-primary w-fit '>
<List>
      {myLinks.map(({text, id}) => (
        <ListItem className=' border-solid' key={text}  disablePadding>
          <ListItemButton component={NavLink} to={`${id}`}>
            <ListItemText color='whitesmoke' primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </div>
    )}
    export default SetingNav