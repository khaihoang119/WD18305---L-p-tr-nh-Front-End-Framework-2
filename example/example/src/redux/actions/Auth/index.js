import { Auth } from "../../types"


 const getProfile = (payload) => {
    console.log("action ===",{
        type: Auth.GET_INFO,
        payload,
    });
    return{
        type: Auth.GET_INFO,
        payload,
    };
};
export {getProfile};