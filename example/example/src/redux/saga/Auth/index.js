import { all, takeLatest, put, call } from 'redux-saga/effects';
import { Auth } from "../../types";
import { getProfile } from "../../../services/Auth";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function* authMatch(){
    yield all([takeLatest(Auth.USER_INFO, getUserInfo)]);
}

function* getUserInfo(){
    
    try {
        const profile = yield call(getProfile());
        yield put({ type: Auth.SAVE_USER_INFO, payload: profile });
        history.push('/profile'); // Chuyển trang tới profile
    } catch (error) {
        console.log("Lỗi không lấy được dữ liệu", error);
    }
}


export default authMatch;