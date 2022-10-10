import React, {useEffect, useState} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import noteServices from '../services/noteServices';
import CardNote from './CardNote';


function Note() {

    const location = useLocation();
    const labCase = location.state.labCase;

    return(
        <div className='text-center justify-content-center align-items-center'>
            <div>
                
            </div>
            
        </div>
    )
}

export default Note;