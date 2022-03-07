import React from 'react'

export default function AppointmentCard({appointment}) {
    return (
        <div>
            <label>{appointment.date}</label>
            <label>{appointment.doctorName}</label>
            <label>{appointment.status}</label>
        </div>
    )
}