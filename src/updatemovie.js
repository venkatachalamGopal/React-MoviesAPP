import {useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



export default function UpdateMovie(){

    // const[upmovie,setUpmovie]=useState({});
    const[name,setName]=useState();
    const[poster,setPoster]=useState();
    const[rating,setRating]=useState();
    const[summary,setSummary]=useState();
    const[trailer,setTrailer]=useState();

    const navigate=useNavigate();
    const {id}=useParams();

    // console.log(upmovie);

    useEffect(()=>{
        fetch(`https://6312f929b466aa9b039081d0.mockapi.io/movies/${id}`)
    .then((response)=>response.json())
    .then((data)=>{
        setName(data.name);
        setPoster(data.poster);
        setRating(data.rating);
        setSummary(data.summary);
        setTrailer(data.trailer);
    })
    
    },[id])    
    // Update Moviefunction Here.....
    function updateddata(){
        const newData={
            name:name,
            poster:poster,
            rating:rating,
            summary:summary,
            trailer:trailer
        }
        fetch(`https://6312f929b466aa9b039081d0.mockapi.io/movies/${id}`,{
            method:"PUT",
            body:JSON.stringify(newData),
            headers:{
                "Content-Type":"application/json"
            }

        }).then(()=>navigate('/movies'))
        console.table(newData)
    }
    
    // defaultValue={upmovie.name}
    return(
    <>
    <p>Update Here</p>
        <TextField type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
        <p><TextField type="text" value={poster} onChange={(event)=>setPoster(event.target.value)}/></p>
        <div><TextField type="text" value={rating} onChange={(event)=>setRating(event.target.value)}/></div>
        <div><TextField type="text" value={summary} onChange={(event)=>setSummary(event.target.value)}/></div>
        <div><TextField type="text" value={trailer} onChange={(event)=>setTrailer(event.target.value)}/></div>
        <Button onClick={()=>updateddata(id)} variant='outlined'>Save</Button>
        <Button onClick={()=>navigate(-1)} variant='outlined'><ChevronLeftIcon/>Back</Button>

    
    </>)
}

