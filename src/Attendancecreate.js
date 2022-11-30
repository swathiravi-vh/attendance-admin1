import React from 'react'
import { useFormik } from 'formik'
import { Link,useParams, useNavigate } from 'react-router-dom'

const Attendancecreate = () => {
    let params = useParams();
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            attendance: "present",
            date: "",
            studentId: parseInt(params.id)
        },
        onSubmit: async values => {
            try {
                await fetch("https://61c1954e9dbcca0017c81fbb.mockapi.io/api/students", {
                       method: "POST",
                       body: JSON.stringify(values),
                       headers: {
                           "content-type": "application/json"
                       }
                })
                navigate(`/student-list/${params.id}`)
                alert("Data Saved")
            } catch (error) {
                 console.log(error)
            }
            // alert(JSON.stringify(values, null, 2));
        }
    },[])
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Attendance Create</h1>
                <Link to={`/create-attendance/${params.id}`} href="#" class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create Attendance
                </Link>
           </div> 
           <div className="container">
               <form onSubmit={formik.handleSubmit}>
               <div className="row">
                   <div className="col-lg-6">
                       <select  className="form-control"
                          name="attendance"
                          onChange={formik.handleChange}
                          value={formik.values.attendance}>
                          <option value="present">Present</option>
                          <option value="absent">Absent</option>
                        </select>

                   </div>
                   
                 
                   <div className="col-lg-6">
                       <input type="date" className="form-control" 
                             name="date"
                             onChange={formik.handleChange}
                             value={formik.values.date}/>
                   </div>
                   
                   <div className="col-lg-6 mt-3">
                       <input type="submit" className="btn btn-primary btn-sm" />
                   </div>
               </div>
            </form>
               
           </div> 
        </>
    )
}

export default Attendancecreate
