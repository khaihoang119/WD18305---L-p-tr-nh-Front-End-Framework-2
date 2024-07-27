import { Student } from "../../types";

const stateInit = {
    students: [],
    studentSelected: null,
}

const student = (state = stateInit, action) => {
    switch (action.type) {
        case Student.STUDENT_LIST_UPDATE:
            return {
                ...state,
                ...action?.payload,
            }

        case Student.EDIT_STUDENT:
            return{
                ...state,
                ...action?.payload,
            }
        default:
            return {
                ...state
            }
    }
}

export default student;