import React, {useEffect, useState} from 'react';
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
        {
            id: 2,
            firstName: 'Jonas',
            lastName: 'Era',
            age: '35',
            birthdate: '1986',
            country: 'Sweden',
            city: 'Gothenburg'
        },


    ];

    const [studentList, setStudentList] = useState(initialData);
    const [showDetails, setShowDetails] = useState(false);
    const studentDefaultData = {id: 0, firstName: '', lastName: '', age: '0', birthdate: '', country: '', city: ''}
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
            console.log("Show information", student);
            setStudent(props.student);
            setShowDetails(true);
        };
        return (<button type="button" className="btn btn-primary" onClick={display}>Details</button>);
    }

    const TableRow = (props) => {
        const [TableRow, setTableRow] = useState([]);
        useEffect(() => {
            setTableRow(props.list);

        }, [])
        if (TableRow.length == 0) {
            return (
                <tbody>
                <tr>
                    <td colSpan="5">Data not found</td>
                </tr>
                </tbody>
            );
        } else {
            return (
                <tbody>
                {TableRow.map((student) => {
                    const row = (
                        <tr key={student.id}>
                            <td> {student.id}</td>
                            <td> {student.firstName}</td>
                            <td> {student.lastName}</td>
                            <td> {student.age}</td>
                            <td>
                                <TableAction student={student}/>
                            </td>
                        </tr>
                    )
                    return row;
                })}
                </tbody>
            );
        }
    }

    const ShowStudentDetails = () => {
        console.log(student);
        return (
            <>
                {showDetails && (
                    <div className="card">
                        <div className="card-header bg-info text-white">
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
                                setStudent({})
                            }}>Hide
                            </button>

                        </div>
                    </div>
                )}
            </>
        )
    }

    return(
    <div className="container">
        <table className="table table-striped table-hover">
            <TableHeader/>
            <TableRow list={studentList}/>
        </table>
        <br/>
        <ShowStudentDetails/>
    </div>
)
    ;
}
export default DataTable;