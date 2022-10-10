import axios from 'axios';

const LAB_CASES_FINDALL_RESTAPI = 'http://localhost:8080/lab-case/';

class LabCaseServices{
    getLabCases(){
        // return axios.get(LAB_CASES_FINDALL_RESTAPI);
        return Promise.resolve({
            'data': [{"id":1,"name":"case 1","note":[{"id":1,"note":"primera nota","createAt":"2022-10-08T23:54:44.829+00:00","updateAt":null},{"id":2,"note":"segunda nota","createAt":"2022-10-09T00:28:45.435+00:00","updateAt":null}],"createAt":"2022-10-08T23:54:26.841+00:00","updateAt":null},{"id":2,"name":null,"note":[],"createAt":"2022-10-09T00:46:43.039+00:00","updateAt":null},{"id":3,"name":"case 1","note":[],"createAt":"2022-10-09T01:01:01.309+00:00","updateAt":null}]
          });
    }
}

export default new LabCaseServices();