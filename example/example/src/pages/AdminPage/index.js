import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import {useCookies} from "react-cookie";
import { getProfile } from "../../services/Auth";

const AdminPage = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'role']);

    useEffect(() => {() =>{
        console.log("cookie ===", cookies);
        getUserInfo();

    }, [cookies]});

    const getUserInfo = async () => {
        const res = await getProfile();
        if(res?.role != cookies?.role){
            const dateExpired = new Date();
            dateExpired.setHours(dateExpired.getHours() + 1);
            setCookie("role", res?.role, {path: "/", expires: dateExpired});
        }
    }
    
    return cookies?.token && cookies?.role == "admin" ? (
        <div className="container-flui">
            <h1>Header</h1>
            <h1>content Page</h1>
            <Outlet />
            <h1>Footer</h1>
        </div>
    ):(
        <Navigate to = {"/login"} />
    )
}
export default AdminPage;