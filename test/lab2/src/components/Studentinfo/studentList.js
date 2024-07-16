import React from "react";
import StudentInfo1 from "./Student";

const StudentList = ({students}) =>{
    return (
    <>
            {students.map((student, index) => (
                <StudentInfo1
                    key={index}
                    no={index + 1}
                    name={student.name}
                    code={student.code}
                    address={student.address}
                />
            ))}
       </>
    );
}

export default StudentList;