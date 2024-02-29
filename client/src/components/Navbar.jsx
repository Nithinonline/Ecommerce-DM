import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [isDrawerRightOpen, setisDrawerRightOpen] = useState(false);
  const navigate=useNavigate()

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'primary'  }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setisDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1 }}>
            SnitchIt
          </Typography>
          
          <ShoppingCartIcon open={isDrawerRightOpen} onClick={()=>setisDrawerRightOpen(!isDrawerRightOpen)} />
          {/* <LogoutIcon onClick={()=>{navigate('/login')}} sx={{marginLeft:"30px"}}/> */}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setisDrawerOpen(false)}>
      <Drawer anchor="left" open={isDrawerOpen} onClick={()=>setisDrawerOpen(!isDrawerOpen)}>
        <List sx={{ width: 200 }}>
          {['Home', 'About', 'Contact'].map((text) => (
            <ListItem  key={text} onClick={()=>setisDrawerRightOpen(!isDrawerOpen)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </Drawer>

      
      <Cart isOpen={isDrawerRightOpen} handleClose={() => setisDrawerRightOpen(false)} />
    </>
  );

};

export default Navbar;
