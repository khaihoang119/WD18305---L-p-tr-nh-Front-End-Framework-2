import { Auth } from "../../types";


const stateInit = {
    profile: null
};

const auth = (state = stateInit, action) => {
    switch (action.type) {
        case Auth.GET_INFO:
            return {
                ...state,
               ...action?.payload,
            };
        default:
            return {...state};
    }
};
export default auth;