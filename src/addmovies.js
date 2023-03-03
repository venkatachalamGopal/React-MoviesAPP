import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function Addmovies(){
    const [name,setName]=useState();
    const [poster,setPoster]=useState();
    const [rating,setRating]=useState();
    const [summary,setSummary]=useState();
    const[trailer,setTrailer]=useState();
    const navigate=useNavigate();

// Add Movie function Here ...

    function addmovie(){
        const newMovie={
            name:name,
            poster:poster,
            rating:rating,
            summary:summary, 
            trailer:trailer
        }
        fetch(`https://6312f929b466aa9b039081d0.mockapi.io/movies`,{
                method:"POST",
                body:JSON.stringify(newMovie),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(()=>navigate('/movies'))
    }

    return(
        <>
        <p>Add Your Movies Here ....</p>
        <div>
        {/* <p><input type='text' onChange={(event)=>setName(event.target.value)}/></p>
        <p><input type='text' onChange={(event)=>setPoster(event.target.value)}/></p>
        <p><input type='text' onChange={(event)=>setRating(event.target.value)}/></p>
        <p><input type='text' onChange={(event)=>setSummary(event.target.value)}/></p>
        <p><input type='text' onChange={(event)=>setTrailer(event.target.value)}/></p>
        <button onClick={()=>addmovie()} >Click to ADD</button> */}

        {/* Material Ui Design */}

        <p>
        <TextField size="small" label='Movie Name' variant='outlined'onChange={(event)=>setName(event.target.value)} />
        </p>
        <p>
        <TextField size="small"label='Poster' variant='outlined'onChange={(event)=>setPoster(event.target.value)}/>
        </p>
        <p>
        <TextField size="small"label='Rating' variant='outlined'onChange={(event)=>setRating(event.target.value)}/>
        </p>
        <p>
        <TextField size="small"label='Summary' variant='outlined'onChange={(event)=>setSummary(event.target.value)}/>
         </p>
        <p>
        <TextField size="small"label='Trailer' variant='outlined'onChange={(event)=>setTrailer(event.target.value)}/>
        </p>
        <Button  onClick={()=>addmovie()} variant="contained">Click to ADD</Button>
        <Button onClick={()=>navigate('/movies')}variant="outlined">Cancel</Button>
        </div>
        </>
    );
}

export{Addmovies}