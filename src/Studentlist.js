import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Studentlist = () => {
    const [students, setStudents] = useState([]);
    useEffect(async () => {
        try {
            let studentData = await fetch("https://61c1954e9dbcca0017c81fbb.mockapi.io/api/students");
            let studentList = await studentData.json()
            setStudents(studentList)
        } catch (err) {
            console.log(err);
        }
    }, [])
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Student List</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create Attendance
                </a>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Student Record</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Avatar</th>

                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    students.map((student) => {
                                        return <tr>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.avatar}</td>
                                        <td>
                                            <Link to={`/student-list/${student.id}`}>
                                                    <button className="btn btn-danger btn-sm">View</button>
                                            </Link>
                                            
                                        </td>
                                    </tr>
                                        

                                    })
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Studentlist
