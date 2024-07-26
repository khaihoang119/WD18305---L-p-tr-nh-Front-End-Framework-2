import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Student } from "../../redux/actions";


const StudentList = () => {
    const students = useSelector((state) => state?.student?.students);
    return (
        <div className="container">
        <h1 className="text">StudentList</h1>
        <button className="btn btn-primary"><a href="/student-form">Add Student</a></button>
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>UserName</th>
                        <th>Code</th>
                        <th>Address</th>
                        </tr>
                        </thead>
                        <tbody>
                            {students?.map((value, index) =>{
                                return <tr className="" key={String(index)}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{value?.code}</td>
                                    <td>{value?.username}</td>
                                    <td>{value?.address}</td>
                                </tr>
                            })}
                        </tbody>
                        </table>
                        </div>
        </div>
    );
};

export default StudentList;