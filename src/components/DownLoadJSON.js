import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const DownloadJSON = () => {

    const location = useLocation();
    const labCase = location.state.labCase;
    const note = location.state.note;
        
    const noteData = {
        case_id: labCase.id,
        note:{
            id: note.id,
            note: note.note
        }
    };
    
    const noteDadaJSON = JSON.stringify(noteData, null, "\t");

    console.log(noteDadaJSON);
  
    return (
        <div className="card container-fluid w-75 col-12 my-4">
        <div className = "col-12">
            <a download='noteDadaJSON.json' href={`data:text/plain;charset=utf-8,${noteDadaJSON}`}>DOWNLOAD JSON</a>
                
        </div>
    </div>
    );
  };
  
export default DownloadJSON;