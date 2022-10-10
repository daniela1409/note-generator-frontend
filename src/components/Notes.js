import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import noteServices from '../services/noteServices';
import CardNote from './cardNote';


function Notes(props) {

    // const { id } = useParams();
    // const { notes, setNotes } = useState([]);


    // useEffect(()=>{
    //     noteServices.getLabCases(id)
    //     .then((response) => {
    //         setNotes(response.data);
    //         console.log(notes);
    //     });
    // },[]);
    console.log(props);
        
    return(
        <div></div>
            
    )
}

export default Notes;