import React from 'react'
import Card from './Card';
const Dashboard = () => {
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Attendance Report</a>
            </div>


            <div class="row">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
            </div>    
                
            </>
            )
}

            export default Dashboard
