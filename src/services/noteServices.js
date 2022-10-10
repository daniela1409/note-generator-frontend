import axios from 'axios';

const LAB_CASES_FINDALL_RESTAPI = 'http://localhost:8080/note/';

class NoteServices{
    getLabCases(id){
        return axios.get(LAB_CASES_FINDALL_RESTAPI + id);
    }
}

export default new NoteServices();