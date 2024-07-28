import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteStudent } from "../../redux/actions/Student";

const StudentList = () => {
    const students = useSelector((state) => state.student.students);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Students === ", students);
    }, [students]);

    const handleEdit = (index) => {
        navigate(`/student-form/${index}`);
    };

    const handleDelete = (index) => {
        dispatch(deleteStudent(index));
    };

    return (
        <div className="container">
            <h5 className="text-primary text-center">Danh sách sinh viên</h5>
            <div className="mb-2">
                <Link type="button" className="btn btn-primary" to="/student-form">Thêm sinh viên</Link>
            </div>
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students?.map((value, index) => {
                        return (
                            <tr key={String(index)}>
                                <th scope="row">{index + 1}</th>
                                <td>{value?.code}</td>
                                <td>{value?.name}</td>
                                <td>{value?.address}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-warning me-2"
                                        onClick={() => handleEdit(index)}
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
