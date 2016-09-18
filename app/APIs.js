import 'whatwg-fetch'

const API_URL = 'http://localhost:8000/slip';
const API_HEADER = {
}

let APIs = {
    // 전표데이터 조회
    selectSlip(arg) {
        return fetch(API_URL + arg, {headers: API_HEADER})
            .then((response) => response.json());
    }

    // 전표데이터 삭제

    // 전표데이터 추가

    // 전표데이터 업데이트
}

export default APIs;