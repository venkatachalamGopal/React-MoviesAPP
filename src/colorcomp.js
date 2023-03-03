import {useState} from 'react'

function Colorcomp(){
    const[color,setColor]=useState("");
    const sty={
    backgroundColor:color,
    width:"300px",height:"25px"
    }

    return (
        <>
        <h2>Color Components-Detais:</h2>
        <input style={sty} type={"text"}placeholder="Enter colors"onChange={(event)=>
            setColor(event.target.value)}></input>
            <Addcolor newcolor={color}/>
       
        </>
    )
}

function Addcolor({newcolor}){
    
   const[colorlist,setColorlist]=useState(["blue","green"]);
   
    return(
        <>
        <button onClick={()=>{setColorlist([...colorlist,newcolor])}}>Click</button>

        {colorlist.map((elem,index)=>(<Addcolor2 key={index} clr={elem}/>))}
        
        </>
    );
}

function Addcolor2({clr}){
    const mystyle={
        width:"300px",height:"25px",
        backgroundColor:clr,
    }

    return(
    <div>
    <div>
    <p style={mystyle}>Hello</p>
    </div>
    
    </div>
    );
}

export{Colorcomp};