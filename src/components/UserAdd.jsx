import { Button, Box, TextField } from '@mui/material';
export default function EditAdd({ handleChange, formRef, peticionPost, onClose, form, setView}) {
  const add = () => {
    peticionPost();
    onClose();
  }
  const cancel=()=>{
    setView(false)
    onClose()
    peticionPost();
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      ref={formRef}
      noValidate
      autoComplete="off"
    >

      <TextField
        sx={{ display: 'none' }}
        id="filled"
        label="id"
        variant="filled"
        name='id'
        onChange={handleChange}
        defaultValue={form ? form.id : ''}
      />
      <TextField
        id="filled"
        label="nombre"
        variant="filled"
        name='nombre'
        onChange={handleChange}
        defaultValue={form ? form.nombre : ''}
      />
      <TextField
        id="filled"
        label="apellido"
        variant="filled"
        name='apellido'
        onChange={handleChange}
        defaultValue={form ? form.apellido : ''}
      />
      <TextField
        id="filled"
        label="email"
        variant="filled"
        name='email'
        onChange={handleChange}
        defaultValue={form ? form.email : ''}
      />
      <TextField
        id="filled"
        label="password"
        variant="filled"
        name='password'
        onChange={handleChange}
        defaultValue={form ? form.password : ''}
      />

      <TextField
        id="filled"
        label="rol"
        variant="filled"
        name='rol'
        onChange={handleChange}
        defaultValue={form ? form.rol : ''}
      />

      <Button sx={{ color: 'green' }} onClick={() => add()}>Agregar</Button>
      <Button sx={{ color: 'red' }} onClick={() => cancel()}>Cancelar</Button>
    </Box>
  )
}