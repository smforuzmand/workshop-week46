import React, {useState} from 'react';
import button from "bootstrap/js/src/button";

const DataTable = () => {

    const initialData = [
        {
            id: 1,
            firstName: 'Mason',
            lastName: 'Forouzmand',
            age: '35',
            birthdate: '1986',
            country: 'Iran',
            city: 'Tehran'
        },

    ];


    const [studentList, setStudentList] = useState(initialData);
    const [showDetails, setShowDetails] = useState(false);
    const studentDefaultData = {id: 0, firstName: '', lastName: '', age: '', birthdate: '', country: '', city: ''}
    const [student, setStudent] = useState(studentDefaultData);

    const TableHeader = () => {
        return (
            <thead>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Action</th>
            </thead>
        );
    };

    const TableAction = (props) => {

        const display = () => {
            setShowDetails(true);
            console.log(props.student);
            setStudentList(props.student);
        };

        return (<button type="button" className="btn btn-primary">Details</button>)

    }


    const TableRow = (props) => {
        return (
            <tbody>
            {

                props.list.map((student) => (

                    <tr key={student.id}>
                        <td> {student.id}</td>
                        <td> {student.firstName}</td>
                        <td> {student.lastName}</td>
                        <td> {student.age}</td>
                        <td><TableAction student={student}/></td>


                    </tr>
                ))

            }

            </tbody>

        )

    }

    const ShowStudentDetails = () => {

        if (showDetails===true) {
            return (
                <div className="card">
                    <div className="card-header bg-info text-green">
                        student Information
                    </div>
                    <div className="card-body">
                        <h5 className='card-title'>{student.country} {student.city} </h5>
                        <p className="card-text">ID: {student.id}</p>
                        <p className="card-text">Name: {student.firstName} {student.lastName}</p>
                        <p className="card-text">BirthDate: {student.birthdate}</p>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-danger" onClick={() => {
                            setShowDetails(false);
                            setStudent(studentDefaultData)
                        }}>Close
                        </button>
                    </div>
                </div>
            );
        } else {
            return ("");
        }
    };
    return (
        <div className="container">
            <table className="table table-striped table-hover">
                <TableHeader />
                <TableRow list={studentList} />
            </table>
            <br/>
            <ShowStudentDetails />
        </div>
    );
}
export default DataTable;