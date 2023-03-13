//components Import
import {Home} from './home'
import {Allmovies} from './moviecomp';
import {MovieTrailer}from './Trailer'
import {Addmovies} from './addmovies'
import UpdateMovie from './updatemovie';
import { FormValidation } from './form';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Brightness7 from '@mui/icons-material/Brightness7';
import Brightness4 from '@mui/icons-material/Brightness4';


import { ThemeProvider, createTheme } from '@mui/material/styles';


// ------ Routes -------------
import{Routes,Route,useNavigate} from 'react-router-dom'
import {useState} from 'react'



export default function App(){
  const navigate=useNavigate();
  const[bg,setBg]=useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: bg ?'light':'dark',
    },
  });
  
 

  return(
    <>
    {/* Navigation Menus
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/movies">AllMovies</Link></li>
        <li><Link to="/addmovies">AddMovies</Link></li>
      </ul>
    </nav> */}
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={0} style={{minHeight:'100vh'} }>
    <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>navigate('/')} color="inherit">HOME</Button>
          <Button onClick={()=>navigate('/movies')} color="inherit">AllMovies</Button>
          <Button onClick={()=>navigate('/addmovies')} color="inherit">AddMovies</Button>
          <Button onClick={()=>navigate('/formvalidation')} color="inherit">Form</Button>
          <Button color="inherit"onClick={()=>setBg(!bg)}>{bg?<Brightness4/>:<Brightness7/>}{darkTheme.palette.mode}Mode</Button>
        </Toolbar>
      </AppBar>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Allmovies/>}/>
      <Route path='/movietrailer/:id' element={<MovieTrailer />}/>
      <Route path='/addmovies'element={<Addmovies/>}/>
      <Route path='/updatemovie/:id'element={<UpdateMovie/>}/>
      <Route path='/formvalidation' element={<FormValidation/>} />
    </Routes>
    </Paper>
    </ThemeProvider>
    </>
  );
}