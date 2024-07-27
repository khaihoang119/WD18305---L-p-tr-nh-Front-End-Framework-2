import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Student } from "../../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

const StudentForm = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const student = useSelector((state) =>
    state.student.students.find((stu) => stu.code === id)
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchStudent(id)); // Fetch student data when component mounts
    }
  }, [id, dispatch]);
  // Nạp dữ liệu học sinh khi có id
  useEffect(() => {
    if (student) {
        // Nạp dữ liệu vào form khi student được lấy về
        setValue("code", student.code);
        setValue("name", student.name);
        setValue("address", student.address);
    }
}, [student, setValue]);

  // Hàm submit cho form
  const submit = (value) => {
    if (id) {
      // Cập nhật học sinh nếu có id
      dispatch(Student.updateStudent({ ...value }));
    } else {
      // Thêm học sinh mới
      dispatch(Student.addStudent({ ...value }));
    }
    navigate("/student-list");
  };
  return (
    <div className="container">
      <div className="col-4 offset-4">
        <h4 className="text-primary text-center mb-4">Thêm sinh viên</h4>
        {id ? "Sửa thông tin sinh viên" : "Thêm sinh viên"}
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
          {id ? "Cập nhật" : "Thêm"} sinh viên
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
