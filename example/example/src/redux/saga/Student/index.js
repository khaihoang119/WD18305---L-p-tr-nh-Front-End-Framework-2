import {all, put, takeLatest, select} from "redux-saga/effects";
import {Student} from "../../types";


export default function* studentWatch(){
    yield all([takeLatest(Student.ADD_STUDENT, addStudent)]);
}
function* addStudent(type, payload){
    const students = yield select(state => state.student.students);
    yield put ({ type: Student.STUDENT_LIST_UPDATE,
        payload:{
            students: [
                ...students,
                {
                    code: payload?.code,
                    name: payload?.name,
                    address: payload?.address,
                }
            ]
        }
    })
}
