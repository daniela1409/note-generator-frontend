import axios from 'axios';

const LAB_CASES_FINDALL_RESTAPI = 'http://localhost:8080/lab-case/';

class LabCaseServices{
    getLabCases(){
        return axios.get(LAB_CASES_FINDALL_RESTAPI);
      
    }
}

export default new LabCaseServices();