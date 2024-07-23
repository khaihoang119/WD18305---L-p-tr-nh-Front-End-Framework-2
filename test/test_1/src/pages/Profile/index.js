import React, { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useState } from 'react';

const Profile = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["token"]);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        try {
            const token = cookie.token;
            const res = await axios.get("http://172.16.21.214:3001/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res?.data);
        } catch (err) {
            console.log("err === ", err);
        }

    };

    return (
        <div className="container">
            <h1>{`UserName: ${profile?.username}`}</h1>
            <h1>{`Email: ${profile?.email}`}</h1>
            <h1>{`Name:${profile?.full_name} `}</h1>
        </div>
    );
};
export default Profile;