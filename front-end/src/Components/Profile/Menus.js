import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus = () => {
    return (
        <div className='container'>
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to='/profile/personalDetails' action>
                Personal Details
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/docdetails' action>
                Appointments
            </Link>
            <Link className="list-group-item list-group-item-action"  tag="a" to='/profile/mytestlabs' action>
                Test Labs
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to='/profile/mymedicineorders' action>
                Medicine Orders
            </Link>
        </ListGroup>
        </div>
    )
}

export default Menus;