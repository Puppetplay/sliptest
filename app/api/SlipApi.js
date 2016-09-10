import 'whatwg-fetch'

const API_URL = 'http://localhost:8080';
const API_HEADER = {
    'Content-Type': 'application/json'
}

let SlipAPI = {
    fetchSlip() {
        fetch(API_URL + '/20130101~20160101', {headers: API_HEADER})
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
            })
            .catch((error) => {
                console.log('Error', error);
            });
    }
}