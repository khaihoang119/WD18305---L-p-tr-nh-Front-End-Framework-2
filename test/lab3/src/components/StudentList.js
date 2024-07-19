import React, { useState, useEffect } from 'react';
import StudentItem from './StudentItem';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const initialStudents = [
      { id: 1, name: 'Nguyễn Khải Hoàng', code: 'PC07159', phone: '0123456789' },
      { id: 2, name: 'Trần Hữu Đạt', code: 'PC07116', phone: '0987654321' },
      { id: 3, name: 'Lý Thiên Bảo', code: 'PC07117', phone: '0234567891' },
      { id: 4, name: 'Nguyễn Thị Phương Thư', code: 'PC07032', phone: '0234567891' },
      { id: 5, name: 'Lê Thị Kim Yến', code: 'PC06995', phone: '0234567891' },
    ];
    setStudents(initialStudents);
  }, []);

  const handleDelete = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div>
      {students.map(student => (
        <StudentItem key={student.id} student={student} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default StudentList;