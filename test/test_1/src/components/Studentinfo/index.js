import React from "react";

const StudentInfo1 = ({
    no = '-',
    code = '-',
    name = '-',
    address = '-',
}) =>{
    return (
        <div>
            <h4>{`No: ${no}`}</h4>
            <h4>{`Name: ${name}`}</h4>
            <h4>{`Code: ${code}`}</h4>
            <h4>{`Address: ${address}`}</h4>
        </div>
    );
}
export default StudentInfo1;