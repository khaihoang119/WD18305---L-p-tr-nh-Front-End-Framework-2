import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent, addStudent } from "../../redux/actions/Student";
import { useNavigate, useParams } from "react-router-dom";

const StudentForm = () => {
  const { register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { studentIndex } = useParams();
  const students = useSelector((state) => state.student.students);
  const existingStudent = students[studentIndex];
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    address: "",
  });

  useEffect(() => {
    if (studentIndex && !existingStudent) {
      navigate("/student-list");
    } else if (existingStudent) {
      setFormData({
        code: existingStudent.code,
        name: existingStudent.name,
        address: existingStudent.address,
      });
    }
  }, [existingStudent, studentIndex, navigate]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Hàm submit cho form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingStudent) {
      dispatch(updateStudent(studentIndex, formData));
    } else {
      dispatch(addStudent(formData));
    }
    navigate("/student-list");
  };

  return (
    <div className="container">
      <div className="col-4 offset-4">
        <h4 className="text-primary text-center mb-4">Thêm sinh viên</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Code</label>
            <input
              type="text"
              className="form-control"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {existingStudent ? "Sửa" : "Thêm"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
