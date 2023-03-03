import './App.css';
import { useState,useEffect } from 'react';
import{Counter} from './counter';
import{useNavigate} from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button';

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'

import Paper from '@mui/material/Paper'
import StarIcon from '@mui/icons-material/Star';





// AllMovies Page ------------------

function Allmovies(){
    const [movielist,setMovielist]=useState([]);

    function getmovies(){
        fetch("https://6312f929b466aa9b039081d0.mockapi.io/movies")
        .then((data)=>data.json())
        .then((data)=>setMovielist(data))
    }
    useEffect(()=>{
        getmovies();
    },[])

    function deletemovie(id){
        fetch(`https://6312f929b466aa9b039081d0.mockapi.io/movies/${id}`,
        {
            method:"DELETE"
        })
        .then(()=>getmovies())
    }
    

    return(
        <>
        <div className="mainContainer">
        {movielist.map((elem,index)=><Movies movie={elem} key={index} id={elem.id}
        deleteBtn={<Button onClick={()=>deletemovie(elem.id)}><DeleteForeverIcon color="error"/></Button>}
        />)}
        
        </div>
        </>
    );
}



function Movies({movie,id,deleteBtn,updateBtn}){
const[click,setClick]=useState(true)
const navigate=useNavigate();

    const styles={
        color:(movie.rating >8.5) ? "Green":"orange",
        
    }
    // conditional styling purpose,,,,,
    // const hide={
    //     display:click?"block":'none'
    // }

    return(
        <>
        
        <Card className="movieContainer">
        <Paper elevation={10} >
        <img src={movie.poster} alt={movie.title} className='movieImage'/>
        <div className='movieRating'>
        <div>{movie.name} 
        <IconButton color='primary' aria-label='Toggle-summary' onClick={()=>setClick(!click)}>
            {click?<ExpandLessIcon />:<ExpandMoreIcon/>}
        </IconButton>
        <Button onClick={()=>navigate(`/movietrailer/${id}`)}><PlayCircleIcon/></Button>
        </div>
        <div style={styles}>{movie.rating}<StarIcon fontSize='14px'/></div>
        </div>
        {/* <button onClick={()=>setClick(!click)}>Hide</button> */}
        {/* conditionalrendering */}
        {click?<p>{movie.summary}</p>:null}
        <CardActions >
        <Counter/>
        {deleteBtn}
        <Button onClick={()=>navigate(`/updatemovie/${id}`)}><EditIcon color='warning'/></Button>
        </CardActions>
        </Paper>
        </Card>
        
        
        </>
    );
}
export{Allmovies}

// AllMovies Page ------------------// AllMovies Page ------------------
// --- Update Movie References --------
// function UpdateMovie(){
//     const navigate=useNavigate();
//     const[upmovie,setUpmovie]=useState({});
//     const[name,setName]=useState();
//     const[poster,setPoster]=useState();
//     const[rating,setRating]=useState();
//     const[summary,setSummary]=useState();
//     const[trailer,setTrailer]=useState();


//     const {id}=useParams();
//     console.log(upmovie);
//     useEffect(()=>{
//         fetch(`https://6312f929b466aa9b039081d0.mockapi.io/movies/${id}`)
//     .then((response)=>response.json())
//     .then((data)=>setUpmovie(data))
    
//     },[])    
    
//     function updateddata(){
//         const newData={
//             name:name,
//             poster:poster,
//             rating:rating,
//             summary:summary,
//             trailer:trailer
//         }
//         fetch(`https://6312f929b466aa9b039081d0.mockapi.io/movies/${id}`,{
//             method:"PUT",
//             body:JSON.stringify(newData),
//             headers:{
//                 "Content-Type":"application/json"
//             }

//         }).then(()=>navigate('/movies'))
//     }

//     return(
//     <>
//     <p>Update Here</p>
//         <div><input type="text" defaultValue={upmovie.name} onChange={(event)=>setName(event.target.value)}/></div>
//         <div><input type="text" defaultValue={upmovie.poster} onChange={(event)=>setPoster(event.target.value)}/></div>
//         <div><input type="text" defaultValue={upmovie.rating} onChange={(event)=>setRating(event.target.value)}/></div>
//         <div><input type="text" defaultValue={upmovie.summary} onChange={(event)=>setSummary(event.target.value)}/></div>
//         <div><input type="text" defaultValue={upmovie.trailer} onChange={(event)=>setTrailer(event.target.value)}/></div>
//         <button onClick={()=>updateddata(id)}>Save</button>
    
//     </>)
// }


