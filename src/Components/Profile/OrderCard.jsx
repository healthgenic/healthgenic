import React from 'react'

export default function OrderCard({order}) {
    return (
        <div>
            <label>{order.date}</label>
            <label>{order.doctorName}</label>
            <label>{order.status}</label>
        </div>
    )
}