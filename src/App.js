import React ,{useEffect,useState,useRef} from 'react'
import UserList from './components/UsersList';
import UserEdit from './components/UserEdit';
import UserAdd from './components/UserAdd';
import {CssBaseline,Box,Modal,Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {styles,themes} from './styles';
import Nav from './components/Nav'
import {pGet,postUpdate,getOne} from './utils/axios'
export default function App() {

  const theme = createTheme(themes);
  const [editar,setEditar]=useState(false)
  const [form,setForm]=useState({})
  const [users,setUsers]=useState([])
  const [view,setView]=useState(true)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const formRef=useRef(null)
  let url ='https://nodejstest-production.up.railway.app/users'

  useEffect(() => {
    
    pGet('https://nodejstest-production.up.railway.app/users').then(data=>{
      setUsers(data)
    }
      ).catch(()=>{
        setUsers([{}])
      })
  },[]);
  const listar=()=>{
    peticionGet();
  }
  async function peticionGet() {
    const response = await pGet(url);
    setUsers(response)
    setView(false)
  }
  const peticionPost = async () => {
    await postUpdate(
      `${url}/signup`,
      {
        nombre:form.nombre,
        apellido:form.apellido,
        email:form.email,
        password:form.password,
        rol:form.rol 
      })
      peticionGet();
      setEditar(false)
      setOpen(false)
  }

  const peticionPut = async() => { //UPDATE   
    await postUpdate(
      `${url}/update/${form.id} `,
      {
        nombre:form.nombre,
        apellido:form.apellido,
        rol:form.rol 
      }
      )
      setEditar(false)
      peticionGet();
  }
  const handleChange=()=> {
    setForm({
      ...form,
      [formRef.current[0].name]: Number(formRef.current[0].value),
      [formRef.current[1].name]: formRef.current[1].value,
      [formRef.current[2].name]: formRef.current[2].value,
      [formRef.current[3].name]: formRef.current[3].value,
      [formRef.current[4].name]: formRef.current[4].value,
      [formRef.current[5].name]: formRef.current[5].value 
    })  
  }
  const changeValues=()=> {
    setForm({
      ...form,
      [formRef.current[0].name]: Number(formRef.current[0].value),
      [formRef.current[1].name]: formRef.current[1].value,
      [formRef.current[2].name]: formRef.current[2].value,
      [formRef.current[3].name]: formRef.current[3].value,
    })  
  }
  const editOne=(id)=>{ 
    getOne(`${url}/detail/${id}`).then((response)=>{

      let datos = {
        id:id,
        nombre:response.data.msg.nombre,
        apellido:response.data.msg.apellido,
        rol:response.data.msg.rol
      }
      setForm(datos);
      handleOpen()
    })
  }

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Nav listar={listar} handleOpen={handleOpen} setView={setView}/>
      <Typography bgcolor={theme.palette.purpleLight} color={'white'} variant="h3" component="h5" sx={{textAlign:'center',marginTop:'80px'}}>
         Usuarios
      </Typography>
      {
        view?'':
        <UserList setEditar={setEditar} users={users} editOne={editOne} setView={setView} />
      }
      {
      editar? 
        <Modal
            open={open}
          
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styles}>
              <UserEdit
                    handleChange={changeValues}
                    formRef={formRef}
                    peticionPut={peticionPut}
                    form={form}
                    onClose={handleClose}
                    setEdit={setEditar}
                    />
              </Box>
          </Modal>
      :
          
          <Modal
            open={open}
           
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
              <Box sx={styles}>
                  <UserAdd 
                  setView={setView}
                    formRef={formRef} 
                    handleChange={handleChange} 
                    peticionPost={peticionPost} 
                    onClose={handleClose}/>
              </Box>
          </Modal>}
    </ThemeProvider>
  );
}




