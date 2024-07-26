// import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useCookies } from "react-cookie";
// import { getProfile } from "../../services/Auth";

// const Profile = () => {
//   // const [cookie, setCookie, removeCookie] = useCookies(["token"]);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     getUserInfo();
//   }, []);

//   const getUserInfo = async () => {
//     //Call api get info
//     try {
//       // const token = cookie?.token;
//       // const res = await axios.get("http://172.16.21.214:3001/user", {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,
//       //   },
//       // });
//       // console.log(res?.data);

//       const res = await getProfile();
//       setProfile(res);
//     } catch (err) {
//       console.log("err === ", err);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>{`Username: ${profile?.username}`}</h1>
//       <h1>{`Email: ${profile?.email}`}</h1>
//       <h1>{`Name: ${profile?.full_name}`}</h1>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect } from "react";
import {
  useSelector, //Lấy state trong store (State update => func render)
  useDispatch, //Gọi Action xử lý
} from "react-redux";
import { Count } from "../../redux/actions";

const Profile = () => {
  const count = useSelector((stateRedux) => stateRedux.count.count);
  const dispatch = useDispatch();
  const userInfo = useSelector((stateRedux) => stateRedux.auth.profile);
  useEffect(() => {
    console.log("state components === ", count);
    console.log("state user === ", userInfo);
  }, [count, userInfo]);

  const plus = () => {
    dispatch(Count.plus());
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      {userInfo ? (
        <div>
          <p>Name: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="row">
        <button className="btn btn-danger w-auto">{`-`}</button>
        <h1 className="text-primary w-auto">{count}</h1>
        <button className="btn btn-success w-auto" onClick={plus}>{`+`}</button>
        <div className="col-12">
          <button className="btn btn-warning w-auto">{`Clean`}</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
