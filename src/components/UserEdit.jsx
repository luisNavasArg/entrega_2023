import { Button, Box, TextField } from '@mui/material';
export default function EditAdd({ handleChange, formRef, peticionPut, form, onClose, setEdit }) {
  let dataRol = '';
  if (form.rol) { dataRol = 1 } else { dataRol = 0 }
  const ejecutar = () => {
    peticionPut()
    onClose()
  }
  const cancel=()=>{
    onClose()
    setEdit(false)
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
        label="rol"
        variant="filled"
        name='rol'
        onChange={handleChange}
        defaultValue={form ? dataRol : ''}
      />
      <Button sx={{ color: 'green' }} onClick={() => ejecutar()}>Cambiar</Button>
      <Button sx={{ color: 'red' }} onClick={() => cancel()}>Cancelar</Button>
    </Box>
  )
}