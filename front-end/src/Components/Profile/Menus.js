import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to='/profile/personalDetails' action>
                Personal Details
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/profile/myappointments' action>
                My Appointments
            </Link>
            <Link className="list-group-item list-group-item-action"  tag="a" to='/profile/mytestlabs' action>
                My Test Labs
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/profile/mymedicineorders' action>
                My Medicine Orders
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/profile/logout' action>
                Logout
            </Link>
        </ListGroup>
    )
}

export default Menus;