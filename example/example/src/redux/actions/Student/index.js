import {Student} from "../../types";

const addStudent = (payload) => {
    return {
        type: Student.ADD_STUDENT,
        payload,
    };
}
export {addStudent};
