import React, {useEffect, useState} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import noteServices from '../services/noteServices';
import CardNote from './CardNote';


function Notes() {

    const location = useLocation();
    const labCase = location.state.labCase;
    const notes = labCase.note;

    return(
        <div className='text-center justify-content-center align-items-center'>
            <div>
                <h1>{labCase.name}</h1>
                {
                    notes.map((note) => {
                        return(
                            <CardNote
                            labCase={labCase}
                            note={note}
                            key={note.id}
                            />
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Notes;