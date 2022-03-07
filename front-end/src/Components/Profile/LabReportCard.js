import React from 'react'

export default function LabReportCard({testLab}) {
    return (
        <div>
            <label>{testLab.date}</label>
            <label>{testLab.doctorName}</label>
            <label>{testLab.status}</label>
        </div>
    )
}