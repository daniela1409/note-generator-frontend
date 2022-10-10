import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import DownloadJSON from "./components/DownLoadJSON";
import FormNote from "./components/FormNote";
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
          <Route path="/note/save" element={<FormNote/>}/>
          <Route path="/note/download" element={<DownloadJSON/>}/>
          

        </Routes>
      </BrowserRouter>
  );
}

