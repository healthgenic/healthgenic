import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus = () => {
    return (
        <ListGroup>
            <ListGroupItem tag="a" href='/personalDetails' action>
                Personal Details
            </ListGroupItem>
            <ListGroupItem tag="a" href='/myappointments' action>
                My Appointments
            </ListGroupItem>
            <ListGroupItem  tag="a" href='/mytestlabs' action>
                My Test Labs
            </ListGroupItem>
            <ListGroupItem tag="a" href='/mymedicineorders' action>
                My Medicine Orders
            </ListGroupItem>
            <ListGroupItem tag="a" href='/logout' action>
                Logout
            </ListGroupItem>
        </ListGroup>
    )
}

export default Menus;