import { Auth } from "../../types"


 const getProfile = () => {
    return{
        type: Auth.GET_INFO,
    };
};
export {getProfile};