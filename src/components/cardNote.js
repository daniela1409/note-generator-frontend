import React from 'react'
import { Link } from 'react-router-dom'

class CardNote extends React.Component{

    render(){
        
        const {id, note} = this.props; 

        return(

            <div className="card container-fluid w-75 col-12 my-4" id="card">
                
                <div className = "card-body w-100 row" id="body">

                    <div className = "col-8 row w-100">
                        <div className = "col-8 ">
                            <label>Note</label>
                            <textarea  rows="5" cols="50" disabled>{note}</textarea>
                        </div>
                        <div className = "col-8 ">
                            
                        </div>
                     
                    </div>
                   
                </div>
            </div>
            
        )
    }
}

export default CardNote;