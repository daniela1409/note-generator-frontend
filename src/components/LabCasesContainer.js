import React, { Component } from 'react';
import LabCaseServices from '../services/LabCaseServices';
import Card from '../components/Card';

class LabCasesContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            labCases:[]
        }
    }
    componentDidMount(){
        LabCaseServices.getLabCases()
        .then((response) => {
            this.setState({labCases: response.data})
            console.log(response.data)
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.labCases.map((labCase) => {
                        return(
                            <Card 
                            labCase = {labCase}
                            name = {labCase.name}
                            id = {labCase.id}
                            key={labCase.id}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
export default LabCasesContainer;