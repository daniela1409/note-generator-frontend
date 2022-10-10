import React, {useEffect, useState} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import noteServices from '../services/noteServices';
import CardNote from './cardNote';


function Notes(props) {

    // const { id } = useParams();
    // const { notes, setNotes } = useState([]);
    const location = useLocation();


    // useEffect(()=>{
    //     noteServices.getLabCases(id)
    //     .then((response) => {
    //         setNotes(response.data);
    //         console.log(notes);
    //     });
    // },[]);
    console.log(location);
        
    return(
        <div></div>
            
    )
}

export default Notes;