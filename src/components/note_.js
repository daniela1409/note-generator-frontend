import React, {useState} from 'react';
import noteServices from '../services/noteServices';
import CardNote from './cardNote';


function Note_(props) {

    const{state} = props.location

    const informacion = state[0]
    
        
    return(
        
         <h1>{informacion.id}</h1>
            
    )
}

export default Note_;