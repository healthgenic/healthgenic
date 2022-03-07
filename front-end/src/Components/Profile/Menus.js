import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to='/personalDetails' action>
                Personal Details
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/myappointments' action>
                My Appointments
            </Link>
            <Link className="list-group-item list-group-item-action"  tag="a" to='/mytestlabs' action>
                My Test Labs
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/mymedicineorders' action>
                My Medicine Orders
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/logout' action>
                Logout
            </Link>
        </ListGroup>
    )
}

export default Menus;