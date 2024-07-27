import { Student } from "../../types";

const addStudent = (payload) => {
    return {
        type: Student.ADD_STUDENT,
        payload,
    }
}

const updateStudent = (payload) => {
    return {
        type: Student.EDIT_STUDENT,
        payload,
    }    
}
    

export { addStudent, updateStudent };