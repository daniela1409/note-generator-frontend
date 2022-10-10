import React from 'react'
import { Link } from 'react-router-dom'
import noteServices from '../services/noteServices'
import CardNote from './cardNote'


class Note extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            notes:[]
        }
        
    }
    componentDidMount(){
        noteServices.getLabCases()
        .then((response) => {
            this.setState({notes: response.data});
            console.log(response.data)
        })
    }

    render(){

        return(

            <div className="card container-fluid w-75 col-12 my-4" id="card">
                 <div>
                {
                    this.state.notes.map((note) => {
                        return(
                            <CardNote
                            note = {note.note}
                            id = {note.id}
                            key={note.id}
                            />
                        )
                    })
                }
            </div>
            </div>
            
        )
    }
}

export default Note;