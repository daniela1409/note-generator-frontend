import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component{

    render(){
        
        // const {name, id, note} = this.props; 
        const {labCase, name, id, note} = this.props; 
        console.log(labCase);

        return(

            <div className="card container-fluid w-75 col-12 my-4" id="card">
                
                <div className = "card-body w-100 row" id="body">

                    <div className = "col-8 row w-100">
                        <div className = "col-8 ">
                            <label>Name : {name}</label>
                        </div>
                        <div className = "col-8 ">
                            {/* <Link  to={{pathname:`/note/${id}`, state:[{id: id, name:name, notes:note}]}} >
                                Ver
                            </Link> */}
                            {/* <Link to={`/note/${id}`} state={{id: id, name:name, notes:note}}>
                                Ver
                            </Link> */}
                            <Link to={`/note/${id}`} state={{labCase: labCase}}>
                                Ver
                            </Link>
                        </div>
                     
                    </div>
                   
                </div>
            </div>
            
        )
    }
}

export default Card