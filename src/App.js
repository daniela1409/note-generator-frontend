import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LabCasesContainer from './components/LabCasesContainer';
import Note from "./components/Note";
import Notes from "./components/Notes";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LabCasesContainer />}/>
          <Route path="/note/:id" element={<Notes/>}/>
          <Route path="/note/edit/:id" element={<Note/>}/>
          

        </Routes>
      </BrowserRouter>
  );
}

