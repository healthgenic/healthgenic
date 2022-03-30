import React, { useEffect, useState } from 'react'
import { } from 'reactstrap'
import base_url from '../../api/service'
import axios from 'axios'
import { toast } from 'react-toastify'
const Home = () => {
    useEffect(() => {
        document.title = 'Home'
        //getAllUser();
    }, []);

    //function to call server
    /*const getAllUser = () => {
        axios.get(`${base_url}/users`).then(
            (response) => {
                console.log(response.data)
                //toast.success("Successfully Loaded");
                setUsers(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }*/
    const [users, setUsers] = useState([
        //{username:"akshay", password:"askh@132"}
    ]);
    return (
        <div>
            <div className="jumbotron">
            <fieldset>
                <legend>Personal Details</legend>
                <div><label>Name: </label><label>Akshay Agrawal</label></div>
                <div><label>Email: </label><label>Akshay Agrawal</label></div>
                <div><label>Phone Number: </label><label>Akshay Agrawal</label></div>
                <div><label>Address: </label><label>Akshay Agrawal</label></div>

                <div><label>Blood Group: </label><label>Akshay Agrawal</label></div>
                <div><label>Alternate Phone Number: </label><label>Akshay Agrawal</label></div>
                <div><label>Gender: </label><label>Akshay Agrawal</label></div>
                <div><label>Date of Birth: </label><label>Akshay Agrawal</label></div>

            </fieldset>
            </div>
        </div>
    );
}

export default Home;