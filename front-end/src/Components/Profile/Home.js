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
        <div className="jumbotron">
            <h1>Welcome to Admin Dashboard</h1>
            <hr />
            <p>Go to My Website</p>
        </div>
    );
}

export default Home;