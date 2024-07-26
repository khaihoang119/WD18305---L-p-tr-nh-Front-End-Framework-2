import {Student} from "../../types";

const stateInit = {
    student:[],
    studentSelected: null,//Update info
};

const student = (state = stateInit, action) =>{
    switch(action.type){
        case Student.STUDENT_LIST_UPDATE:
            return{
                ...state,
                ...action?.payload,
            };
            default:
                return{
                    ...state,
                };
    }
};
export default student;