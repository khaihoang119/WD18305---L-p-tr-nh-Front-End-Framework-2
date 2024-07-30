import React from "react";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
    return(
        <div className="container-flui">
            <h1>Header</h1>
            <h1>content Page</h1>
            <Outlet />
            <h1>Footer</h1>
        </div>
    )
}
export default AdminPage;