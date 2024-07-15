import React from "react";

const StudentInfo1 = ({
    no = '-',
    code = '-',
    name = '-',
    address = '-',
}) => {
  
    return (  
            <tr>
                <th>{`${no}`}</th>
                <td>{`${name}`}</td>
                <td>{`${code}`}</td>
                <td>{`${address}`}</td>
            </tr>         
    );

}
export default StudentInfo1;