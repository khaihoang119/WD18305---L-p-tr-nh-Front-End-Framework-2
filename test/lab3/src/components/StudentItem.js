import React from 'react';

const StudentItem = ({ student, onDelete }) => {
  return (
    <tr>
        <th>{student.code}</th>
        <td>{student.name}</td>
        <td>{student.phone}</td>
        <td><button onClick={() => onDelete(student.id)}>Xóa</button></td>
    </tr>
  );
};

export default StudentItem;