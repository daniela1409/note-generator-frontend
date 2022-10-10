import React from 'react';
import {Link} from 'react-router-dom';


function But(props) {
    

    return(
        <div className="col-4 w-100 d-flex justify-content-end">
           <Link to={`/notes/${props.labCaseId}`}  id="link">
                ver
            </Link>
        </div>
    )

}

export default But;