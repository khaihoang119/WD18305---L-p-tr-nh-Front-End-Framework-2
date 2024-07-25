import {
    all, //Đăng ký middleware với Type
    select, //Lấy state trong store (useSelector)
    put, //Đẩy dữ liệu từ middleware qua Store
    takeLatest, //Đăng ký middleware voie Type
    // takeEvery
} from 'redux-saga/effects';
import { Count } from "../../types";

const sleep = async (time) =>
    await new Promise((res, rej) => setTimeout(res, time));

function* countWatch() {
    yield all([
        takeLatest(Count.PLUS, plus),
        takeLatest(Count.MINUS, minus),
        takeLatest(Count.CLEAN, reset),
    ]);
}

function* plus() {
    const count = yield select ((state) => state.count.count);
    console.log("count middleware ===", count);
    console.log("Plus middleware");

    yield sleep(3000);

    yield put({
        type: Count.UPDATE_COUNT,  
        payload: {
            count: count +1,
        }
    })
}

function* minus() {

    console.log("Minus middleware");
    

function* reset() {
    console.log("Reset middleware");
}

export default countWatch;