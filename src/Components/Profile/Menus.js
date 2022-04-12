import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus = () => {
    return (
        <div className='container'>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to='/profile/personalDetails' action="true">
                Personal Details
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/profile/myappointments' action="true">
                Appointments
            </Link>
            <Link className="list-group-item list-group-item-action"  tag="a" to='/profile/mytestlabs' action="true">
                Test Labs
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/profile/mymedicineorders' action="true">
                Medicine Orders
            </Link>
        </ListGroup>
        </div>
    )
}

export default Menus;