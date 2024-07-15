
import { useState } from 'react';
import './App.css';
import StudentInfo1 from './components/Studentinfo';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const students = [
    {
      name:"Hoang",
      code: "PC07159",
      address: "Can Tho City"
    },
    {
      name:"Dat",
      code: "PC07116",
      address: "Can Tho City"
    }
  ]

  const [count, setCount] = useState(0)
  const minus = () =>{
    setCount(count - 1 )
  }
  const plus = () =>{
    console.log("-------");
    console.log("count == ",count);
    const countTemp = count + 1;
    setCount(countTemp);
    console.log("count === ",countTemp);
  }
  //viet state => diem sv ==0
  //if diem < 5 =>fail
  //if die4m > 5 =>pass

  const [point, setPoint] = useState(0);
  const minusPoint = () =>{
    if(point > 0){
      setPoint(point - 1)
    }
  }
  const plusPoint = () =>{
    if(point < 10){
      setPoint(point + 1)
    }
  }
  return (
    <div className="container">
      <h1>Điểm sinh viên</h1>
      <div className='row'>
        <button className='btn btn-danger w-auto' onClick={minusPoint}>{`-`}</button>     
        <h1 className='text-primary w-auto'>{point}</h1>
        <button className='btn btn-primary w-auto' onClick={plusPoint}>{`+`}</button>
        <h1 className='text-danger'>{point >=5 ? 'pass' : 'fail'}</h1>
      </div>

      <div className='row'>
        <button className='btn btn-danger w-auto' onClick={minus}>{`-`}</button>
        <button className='btn btn-danger w-auto' onClick={setCount.bind(this, count -1)}>{`-`}</button>
        {/* chỉ cần làm một chức năng duy nhất không có nhu cầu sử dụng lại {setCount.bind(this, count -1)}*/}
        <h1 className='text-primary w-auto'>{count}</h1>
        <button className='btn btn-primary w-auto' onClick={plus}>{`+`}</button>
      </div>
      {students?.map((value, index)=>{
        return <StudentInfo1 key = {index}
        no = {index+1}
        code = {value?.code}
        name = {value?.name}
        address= {value?.address?.city || value?.address || '-'} />
      })}
    </div>
  );
}

export default App;
