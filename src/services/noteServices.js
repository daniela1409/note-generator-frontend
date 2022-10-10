import axios from 'axios';

const LAB_CASES_FINDALL_RESTAPI = 'http://localhost:8080/note/';

class NoteServices{
    get(id){
        return axios.get(LAB_CASES_FINDALL_RESTAPI + id);
    }
    saveNote(noteData){
        return axios.post(LAB_CASES_FINDALL_RESTAPI, noteData);
    }
    editNote(noteData, id){
        return axios.put(LAB_CASES_FINDALL_RESTAPI + id, noteData);
    }
}

export default new NoteServices();