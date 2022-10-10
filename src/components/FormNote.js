import React, { useState } from "react";
import { redirect, useLocation } from "react-router-dom";
import noteServices from "../services/noteServices";
import {useNavigate} from 'react-router-dom';


const FormNote = () => {

  const location = useLocation();
  const labCase = location.state.labCase;
  const navigate = useNavigate();
      
  
  const [state, setState] = useState({
    note: "",
    lab_case_id: ""
  });
  

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteData = {
      note: state.note,
      lab_case_id: labCase.id
    };
    
    noteServices.saveNote(noteData).then((response) => {
      console.log(response.status);
      alert(response.data['response']);
      navigate('/');
      console.log(response.data);
    }).catch(console.log);
  };

  return (
    <div className='text-center justify-content-center align-items-center row'>
      <h1>Add new Note</h1>
      <hr />
      <form className='text-center justify-content-center align-items-center row' onSubmit={handleSubmit}>
        <div>
          <div className="col-12">
            <label htmlFor="note">Note</label>
          </div>
          <div className="col-12">
            <textarea type="text"
              name="note"
              value={state.name}
              onChange={handleChange}
              rows="10">
            </textarea>
          </div>
            
        </div>
          
        
        <button className="" type="submit">Register</button>
      </form>
    </div>
  );
};


export default FormNote;