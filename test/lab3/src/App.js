import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import StudentList from './components/StudentList';

const App = () => {
  return (
    <div className="container">
      <h1>Danh sách sinh viên</h1>
      <table className="table table-striped">
        <thead>
          <tr class="table-primary">
            <th scope="col">#</th>
            <th scope="col">Họ và Tên</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <StudentList />
        </tbody>
      </table>
    </div>
  );
};

export default App;
