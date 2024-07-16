
// import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import StudentList from './components/Studentinfo/studentList';
// import StudentInfo1 from './components/Studentinfo/Student';
import Login from './pages/Login';
import Register from './pages/Register';
import{
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements

} from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Route>
    )
  );
  
  // const students = [
  //   {
  //     name: "Nguyễn Khải Hoàng",
  //     code: "PC07159",
  //     address: "Can Tho City"
  //   },
  //   {
  //     name: "Trần Hữu Đạt",
  //     code: "PC07116",
  //     address: "Can Tho City"
  //   },
  //   {
  //     name: "Lý Thiên Bảo",
  //     code: "PC07117",
  //     address: "Can Tho City"
  //   },
  //   {
  //     name: "Nguyễn Thị Phương Thư",
  //     code: "PC07032",
  //     address: "An Giang City"
  //   },
  //   {
  //     name: "Lê Thị Kim Yến",
  //     code: "PC06995",
  //     address: "Can Tho City"
  //   }

  // ];

  // useEffect(() => {
  //   console.log("render success");
  // }, []);

  // const [student, setStudent] = useState({
  //   name: "Nguyen Van A",
  //   code: "PC07159",
  //   address: "Can Tho City"
  // });
  // const [count, setCount] = useState(0)
  // const minus = () =>{
  //   setCount(count - 1 )
  // }
  // const plus = () =>{
  //   console.log("-------");
  //   console.log("count == ",count);
  //   const countTemp = count + 1;
  //   setCount(countTemp);
  //   console.log("count === ",countTemp);
  // }
  //viet state => diem sv ==0
  //if diem < 5 =>fail
  //if die4m > 5 =>pass

  // const [point, setPoint] = useState(0);
  // const minusPoint = () =>{
  //   if(point > 0){
  //     setPoint(point - 1)
  //   }
  // }
  // const plusPoint = () =>{
  //   if(point < 10){
  //     setPoint(point + 1)
  //   }
  // }

  // const changeName = () => {
  //   // let studentTemp = student;
  //   // studentTemp.name = "Nguyen Van B";
  //   // setStudent(studentTemp);
  //   setStudent({...student, name: "Nguyen Van B"});
  // }
  return (
    <>
    <RouterProvider router={router} />
    </>
    // <div className="container">
    //   <h1>test 3</h1>
    //   <StudentInfo1 name={student.name} code={student.code} address={student.address} />
    //   <button className='btn btn-primary' onClick={changeName}>{'Change Name'}</button>
    //   <h1>Lab 2 bài 3</h1>
    //   <h1>Danh sách sinh viên nhóm 5 AE</h1>
    //   <table className="table table-striped">
    //     <thead>
    //       <tr class="table-primary">
    //         <th scope="col">#</th>
    //         <th scope="col">Họ và Tên</th>
    //         <th scope="col">MSSV</th>
    //         <th scope="col">Địa chỉ</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <StudentList students={students} />
    //     </tbody>
    //   </table>
    // </div>

  );
}
export default App;
// <div className="container">
//   <h1>Điểm sinh viên</h1>
//   <div className='row'>
//     <button className='btn btn-danger w-auto' onClick={minusPoint}>{`-`}</button>
//     <h1 className='text-primary w-auto'>{point}</h1>
//     <button className='btn btn-primary w-auto' onClick={plusPoint}>{`+`}</button>
//     <h1 className='text-danger'>{point >=5 ? 'pass' : 'fail'}</h1>
//   </div>

//   <div className='row'>
//     <button className='btn btn-danger w-auto' onClick={minus}>{`-`}</button>
//     <button className='btn btn-danger w-auto' onClick={setCount.bind(this, count -1)}>{`-`}</button>
//     {/* chỉ cần làm một chức năng duy nhất không có nhu cầu sử dụng lại {setCount.bind(this, count -1)}*/}
//     <h1 className='text-primary w-auto'>{count}</h1>
//     <button className='btn btn-primary w-auto' onClick={plus}>{`+`}</button>
//   </div>
//   {students?.map((value, index)=>{
//     return <StudentInfo1 key = {index}
//     no = {index+1}
//     code = {value?.code}
//     name = {value?.name}
//     address= {value?.address?.city || value?.address || '-'} />
//   })}
// </div>



