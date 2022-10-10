import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import CardNote from './CardNote';
import { Link } from 'react-router-dom'


function Notes() {

    

    const location = useLocation();
    const labCase = location.state.labCase;
    const notes = labCase.note;

    return(
        <div className='text-center justify-content-center align-items-center row'>
            
            <div className='col-12'>
                <h1>{labCase.name}</h1>

                <div className = "col-12">
                    <Link to={`/note/save`} state={{labCase: labCase}}>
                        New note
                    </Link>
                </div>
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