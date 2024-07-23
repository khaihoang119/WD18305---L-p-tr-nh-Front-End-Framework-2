import request from "../../config/Api";

const loginApi = async ({username, password}) =>{
    const res = await request ({
        path: "/auth/login",
        method: "POST",
        data: {
            username: username,
            password: password,
            device: "website",
        },
    });
    return res;
};

const getProfile = async () =>{
    const res = await request({path: "/user"});

    return res;
}
export {loginApi, getProfile};