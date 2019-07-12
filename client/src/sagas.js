import { takeLatest, put, all, call } from 'redux-saga/effects'

// // Go to API and check testAPI route for a response
// const callAPI = function* () {
//     return fetch("http://localhost:9000/testAPI")
//         .then(res => res.text())
//         .then(res => { apiResponse: res })
//         .catch(err => ({ err: err, hasError: true }));
// }

// // Go to API and check testDB route for a response
// const callDB = function* () {
//     return fetch("http://localhost:9000/testDB")
//         .then(res => res.text())
//         .then(res => { dbResponse: res })
//         .catch(err => ({ err: err, hasError: true }));
// }

const APISaga = function* () {
    const response = yield call(fetch, "http://localhost:9000/testAPI");
    const data = yield response.json();
    if (!data.hasError) {
        yield put({ type: 'GET_API_STATUS_SUCCESS', response: data })
    }
    else {
        yield put({ type: 'GET_API_STATUS_FAILED', response: data })
    }
}

const DBSaga = function* () {
    const response = yield call(fetch, "http://localhost:9000/testDB");
    const data = yield response.json();
    if (!data.hasError) {
        yield put({ type: 'GET_DB_STATUS_SUCCESS', response: data })
    }
    else {
        yield put({ type: 'GET_DB_STATUS_FAILED', response: data })
    }
}

export default function* () {
    yield all([takeLatest('GET_DB_STATUS', DBSaga), takeLatest('GET_API_STATUS', APISaga)])
}