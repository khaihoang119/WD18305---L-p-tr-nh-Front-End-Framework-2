import {all, put, takeLatest, select} from "redux-saga/effects"
import {Student} from "../../types"

export default function* studentWatch(){
    yield all([
            takeLatest(Student.ADD_STUDENT, addStudent),
            takeLatest(Student.EDIT_STUDENT, editStudent),
            takeLatest(Student.DELETE_STUDENT, deleteStudent),   
        ])
}
function* addStudent({type, payload}) {
    const students = yield select((state) => state.student.students)
    yield put ({ 
        type: Student.STUDENT_LIST_UPDATE,
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


function* editStudent({ payload }) {
    const students = yield select((state) => state.student.students);

    const updatedStudents = students.map((student, index) =>
        index === parseInt(payload.studentIndex)
            ? { ...student, ...payload.updatedData }
            : student
    );

    yield put({
        type: Student.STUDENT_LIST_UPDATE,
        payload: {
            students: updatedStudents,
        },
    });
}


function* deleteStudent({ payload }) {
    const students = yield select((state) => state.student.students);

    const filteredStudents = students.filter((_, index) => index !== payload);

    yield put({
        type: Student.STUDENT_LIST_UPDATE,
        payload: {
            students: filteredStudents,
        },
    });
}