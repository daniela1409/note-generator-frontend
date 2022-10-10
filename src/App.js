import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LabCasesContainer from './components/LabCasesContainer';
import Notes from "./components/Notes";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LabCasesContainer />}/>
          <Route path="/note/:id" element={<Notes/>}/>

        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
