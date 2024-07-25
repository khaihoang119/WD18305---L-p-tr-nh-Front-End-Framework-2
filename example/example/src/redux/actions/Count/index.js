import { Count } from "../../types";

const plus = (payload) => {
  console.log("action === ", {
    type: Count.PLUS,
    payload,
  });

  return {
    type: Count.PLUS,
    payload,
  };
};

const minus = (payload) => {
  console.log("action === ", {
    type: Count.MINUS,
    payload,
  });

  return {
    type: Count.MINUS,
    payload,
  };
};

const clean = () => {
  console.log("action === ", {
    type: Count.CLEAN,
  });

  return {
    type: Count.CLEAN,
  };
};

export { plus, minus, clean };
