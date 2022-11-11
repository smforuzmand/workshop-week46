import React from 'react';
import './table.css'
const StudentTableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
        </thead>
    );
};

const StudentTableBody = () => {
    return (
        <tbody >
        <tr>
            <td>1</td>
            <td>Mason</td>
            <td>Forouzmand</td>
            <td>35</td>
            <td>
               <StudentTableAction/>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Simon</td>
            <td>Elbrink</td>
            <td>25</td>
            <td>
                <StudentTableAction/>
            </td>
        </tr>
        </tbody>
    )
};


const StudentTableAction = () => {
    return (
            <button className='btn btn-primary'>Details</button>

    )
};

const StudentTable = () => {
    return (
        <div>
            <table className='table table-light table-striped' border="1">
                <StudentTableHeader/>
                <StudentTableBody/>

            </table>
        </div>

    )


}


export default StudentTable;