import{useNavigate,useParams} from 'react-router-dom';
import{useEffect, useState} from 'react'
import Button from'@mui/material/Button'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function MovieTrailer(){
    const navigate=useNavigate();
    const{id}=useParams();
    console.log(id);
    const [movie,setMovie]=useState({});
    fetch(`./data.json/${id}`).then((res)=>
        res.json()
    ).then((data)=>{
        console.log(data);
        
    })


    // useEffect(()=>{
    //     fetch(`./data.json/${id}`)
    //     .then((data)=>data.json())
    //     .then((data)=>{
    //         setMovie(data)
    //     })
    // },[id])

    // console.log(id);
    // const movie=movielist[id];
    // console.log(movie);
    // console.log(movielist[id]); getting single movie Separately
    return(
    <>
    <h1>Trailer of -{movie.name}</h1>
    <div className='movieRating'>
        <div >
        <iframe width="853" height="480" 
        src={movie.trailer} 
        title={movie.name}>
        </iframe>
        </div>
        <div>
        <div className='movieRating'>
        <h3>{movie.name}</h3>
        <h4>{movie.rating}</h4>
        </div>
        <p className='summary'>{movie.summary}</p>
        <Button variant='outlined' onClick={()=>navigate(-1)}><ChevronLeftIcon/>Back</Button>
        </div>
    </div>    
    </>
    );
}

export{MovieTrailer}