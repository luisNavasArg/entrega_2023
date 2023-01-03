import * as React from 'react';
import { useState } from 'react'
import Button from '@mui/material/Button';
import { Menu} from '@mui/material/';
import MenuItem from '@mui/material/MenuItem';
export default function BasicMenu({ listar, handleOpen,setView }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    listar();
    setAnchorEl(null);
  };
  const add=()=>{
    handleOpen()
    setView(false)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: 'white', bgcolor: 'black'  }}
      >
        Users
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={handleClose}>Listar</MenuItem>
        <MenuItem onClick={add}>Agregar</MenuItem>
      </Menu>
    </div>
  );
}