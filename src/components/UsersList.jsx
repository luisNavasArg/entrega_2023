import React from 'react';
import {Container,Box,Avatar,Stack,Button} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
function UserList({setEditar, users,editOne,setView}) {
  // users.map(u=>Object.keys(users))
  console.log(Object.keys(users[0]));
 const edit=(id)=>{
  editOne(id)
  setEditar(true)
  setView(false)
 }

  return (
    
    <Container sx={{display:'flex',justifyContent:'center'}} maxWidth="lg" > 
    <Box sx={{ my: 4 }}>  
      <Table sx={{width:800 , backgroundColor:'#f49eff'}} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell><b>Avatar</b></TableCell>
            <TableCell><b>Nombre</b></TableCell>
            <TableCell><b>Apellido</b></TableCell>
            <TableCell><b>Email</b></TableCell>
            <TableCell><b>Modificar</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor:'purple' }}>{user.nombre[0]}</Avatar>
        </Stack>
              </TableCell>
              <TableCell component="th" scope="row">
                {user.nombre}
              </TableCell>
              <TableCell>{user.apellido}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell><Button sx={{ color: 'black'}}onClick={()=>edit(user.id)}><EditIcon/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </Container>
  );
}

export default UserList;
