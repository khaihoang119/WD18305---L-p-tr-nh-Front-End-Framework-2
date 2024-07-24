import { Count } from "../../types"

const stateInit = {
    count: 0,
    // titile: "ABC",
    // content: "ABC"
};

const count = (state = stateInit, action) => {
    console.log("state reducers === ", state);
    console.log("action reducers === ", action);
    switch (action.type) {
        case Count.PLUS:
            return {
                ...state,
                count: action.payload
            };
        case Count.MINUS:
            return {
                ...state,
                count: action.payload
            };
        case Count.CLEAN:
            return {
                ...state,
                count: 0
            };
        default:
            return { ...state };
    }
};
export default count;