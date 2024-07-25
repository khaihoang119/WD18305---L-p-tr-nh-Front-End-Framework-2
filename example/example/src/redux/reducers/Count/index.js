import { Count } from "../../types";

const stateInit = {
  count: 0,
  title: "title",
  content: "content",
};

const count = (state = stateInit, action) => {

  switch (action.type) {
    case Count.UPDATE_COUNT:
      console.log("state reducers === ", state);
      console.log("action reducers === ", action);

      return {
        ...state,
        ...action.payload,
      };
    case Count.CLEAN:
      console.log("state reducers === ", state);
      console.log("action reducers === ", action);
      
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

export default count;
