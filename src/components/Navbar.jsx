import * as React from 'react';
import { Box } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Fab from '@mui/material/Fab';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

  const curentDate =  new Date().toLocaleString() + ""
  const myLinks = [
    {
      text : 'عرض المبيعات',
      id : "mabeat/"
    },
    {
      text : 'عرض فواتير غير منتهيه',
      id :"foater/"
    },
    {
      text : 'الخزينة',
      id : "khazena/"
    }, 
    {
      text : 'نهاية اليوم' ,
      id : "nhaetElyom/"
    }
  ]
  const myLinks2 = [
    {text : "إدارة",
    id :"setings/" 
    },
    {text : "معلومات المستخدم",
      id : "personalInfo/"
    },
    {text : "تسجيل الخروج" , 
      id :"logOut/"
    }
  ]
export default function Navbar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {myLinks.map(({text, id}) => (
          <ListItem key={text}  disablePadding>
            <ListItemButton component={Link} to={`${id}`}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {myLinks2.map(({text, id}) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`${id}`}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <h1 className='mx-[25%]'>{curentDate} </h1>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
           <Box  className="absolute top-2 left-2" sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab onClick={toggleDrawer(anchor, true)} color="secondary" aria-label="edit" >
            <SettingsIcon/>
      </Fab>
    </Box>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
 