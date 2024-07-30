import { Student } from "../../types";

const addStudent = (payload) => {
    return {
        type: Student.ADD_STUDENT,
        payload,
    }
}

const updateStudent = (studentIndex, updatedData) => {
    return {
        type: Student.EDIT_STUDENT,
        payload: { studentIndex, updatedData },
    };
};

const deleteStudent = (studentId) => {
    return {
        type: Student.DELETE_STUDENT,
        payload: studentId,
    };
};   

export { addStudent, updateStudent, deleteStudent };