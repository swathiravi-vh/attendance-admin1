import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom';


const Attendancelist = () => {
    const [attendance, setAttendance] =  useState([]);
     let params = useParams()  
    useEffect(async () => {
        try {
            let attendanceData = await fetch(`https://61c1954e9dbcca0017c81fbb.mockapi.io/api/students/${params.id}`)
            let attendList = await attendanceData.json()
            setAttendance(attendList)
        } catch (error) {
            console.log(error);
        }
    },[])
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Student List</h1>
                <Link to={`/create-attendance/${params.id}`} href="#" class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create Attendance
                </Link>
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
                                
                                    <th>Attendance</th>
                                    <th>Date</th>

                                    
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    attendance.map((attendance) => {
                                        return <tr>
                                        <td>{attendance.attendance}</td>
                                        <td>{attendance.date}</td>
                                        
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

export default Attendancelist
