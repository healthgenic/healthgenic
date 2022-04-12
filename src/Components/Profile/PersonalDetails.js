import React, { useEffect, useState } from 'react'
import { } from 'reactstrap'
import userService from '../../service/user-service'
import authService from '../../service/auth.service'
const Home = () => {
    
    const username = authService.getCurrentUser().username;

    const [data, setData] = useState({});
    
    const profile = () => userService.getUserProfile(username).then(
        (response)=>{
            setData(response.data);
        }
    )

    useEffect(() => {
        document.title = 'Home'
        profile();
    }, []);

    return (
        <div>
            <div className="jumbotron">
            <fieldset>
                <legend>Personal Details</legend>
                <div><label>Name: </label><label>{data.name}</label></div>
                <div><label>Email: </label><label>{data.email}</label></div>
                <div><label>Phone Number: </label><label>{data.phoneNumber}</label></div>
                <div><label>Address: </label><label>{data.city}</label></div>

                <div><label>Blood Group: </label><label>{data.bloodGroup}</label></div>
                <div><label>Alternate Phone Number: </label><label>{data.alternateNumber}</label></div>
                <div><label>Gender: </label><label>{data.gender}</label></div>
                <div><label>Date of Birth: </label><label>{data.dateOfBirth}</label></div>
            </fieldset>
            </div>
        </div>
    );
}

export default Home;