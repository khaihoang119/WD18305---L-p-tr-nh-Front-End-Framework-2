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
                return {
                    ...state,
                    students: state.students.map((student, index) =>
                        index === parseInt(action.payload.studentIndex)
                            ? { ...student, ...action.payload.updatedData }
                            : student
                    ),
                };
                case Student.DELETE_STUDENT:
                    return {
                        ...state,
                        students: state.students.filter((_, index) => index !== action.payload),
                    };
        default:
            return {
                ...state
            }
    }
}

export default student;