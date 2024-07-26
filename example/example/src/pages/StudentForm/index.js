import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Student } from "../../redux/actions";

const StudentForm = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = (value) => {
    dispatch(Student.addStudent({ ...value }));
    navigate("/student-list");
  };

  return (
    <div className="container p-3">
      <form>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input type="text" className="form-control" {...register("name")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Code:</label>
          <input type="text" className="form-control" {...register("code")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Address:</label>
          <input
            type="text"
            className="form-control"
            {...register("address")}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit(submit())}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
