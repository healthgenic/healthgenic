import React, { useState } from 'react'
import AppointmentCard from './AppointmentCard';

export default function MyAppointments(){
    const [appointments, setAppointments] = useState([
        {date:'08 Mar, 2018', doctorName:'Dr ABC', status:'Done'},
        {date:'08 Mar, 2018', doctorName:'Dr ABC', status:'Scheduled'},
        {date:'08 Mar, 2018', doctorName:'Dr ABC', status:'Ongoing'},
        {date:'08 Mar, 2018', doctorName:'Dr ABC', status:'Upcoming'}
    ]);
    return (
        <div>
            <h1>myappointments</h1>
            {
                appointments.length > 0 
                ? appointments.map((appointment)=> <AppointmentCard appointment={appointment}/>)
                :"No Appointment Done"
            }
        </div>
    )
}