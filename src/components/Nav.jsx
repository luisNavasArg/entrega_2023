import { AppBar, Toolbar, Typography} from '@mui/material';
import Menu from './Menu'
export default function Nav({ listar, handleOpen,setView }) {
  return (
    <AppBar  sx={{position:"fixed",backgroundColor:'#80008062'}} >
      <Toolbar>
        <Typography variant="h6" color="white" noWrap>
          <Menu listar={listar} handleOpen={handleOpen} setView={setView}
          />
        </Typography>
      </Toolbar>
    </AppBar>)
}