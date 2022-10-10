import React from 'react'
import { Link } from 'react-router-dom'

class CardNote extends React.Component{

    render(){
        
        const {labCase, note} = this.props; 

        return(

            <div className="card container-fluid w-75 col-12 my-4" id="cardNote">
                
                <div className = "card-body w-100 row" id="body">

                    <div className = "col-8 row w-100">
                        <div className = "col-8 ">
                            <label>Note</label>
                            <br/>
                            <textarea value={note.note}  rows="5" cols="50" disabled></textarea>
                        </div>
                        <div className = "col-4 ">
                            <div className = "col-12">
                                <Link to={`/note/edit/${note.id}`} state={{labCase: labCase}}>
                                    Edit
                                </Link>
                            </div>
                            
                        </div>
                     
                    </div>
                    
                   
                </div>
            </div>
            
        )
    }
}

export default CardNote;