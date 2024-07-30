import React, { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { Student } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (value) => {
        dispatch(Student.addStudent({ ...value }))
        navigate("/student-list")
    }
    return (

        <div className="container">
            <div className="col-4 offset-4">
                <h4 className="text-primary text-center mb-4">Thêm sinh viên</h4>
                <div className="mb-3">
                    <label className="form-label">Code</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="code"
                        {...register("code")}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        {...register("name")}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="address"
                        {...register("address")}
                    />
                </div>

                <button
                    type="button"
                    className="btn btn-primary w-100 mb-3"
                    onClick={handleSubmit(submit)}
                >
                    Thêm
                </button>


            </div>
        </div>
    )
}

export default StudentForm;