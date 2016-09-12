import 'whatwg-fetch'

const API_URL = 'http://localhost:8000/slip';
const API_HEADER = {
}

let APIs = {
    selectSlip(arg) {
        return fetch(API_URL + arg, {headers: API_HEADER})
            .then((response) => response.json());
    }
}

export default APIs;