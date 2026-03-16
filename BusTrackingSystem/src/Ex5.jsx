import React, { useState } from "react"
import Modal from './Modal'


function Ex5(){
    const [modal,setmodal]=useState(false);
    return(
        <>
        <button onClick={()=>setmodal(true)}>Show Tickets</button>
       {modal && (<Modal close={setmodal}/>)} 
        </>
    )
   
    
}

export default Ex5