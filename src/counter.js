import { useState } from "react";
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt'
import ThumbDownAlt from '@mui/icons-material/ThumbDownAlt'





function Counter(){
    const[like,setLike]=useState(0);
    const[dislike,setDislike]=useState(0);
    return(
        <>
        {/* <button onClick={()=>setLike(like+1)}>{like} like</button> */}
        {/* <button onClick={()=>setDislike(dislike+1)}>{dislike} Dislike</button> */}
        <IconButton aria-label="like-Button" onClick={()=>setLike(like+1)}>
            <Badge badgeContent={like} color='success'>
            <ThumbUpAlt ></ThumbUpAlt>
            </Badge>
        </IconButton>
        <IconButton aria-label="Dislike-Button" onClick={()=>setDislike(dislike+1)}>
            <Badge badgeContent={dislike} color='error'>
            <ThumbDownAlt ></ThumbDownAlt>
            </Badge>
        </IconButton>
        
        </>
    );
}

export {Counter}