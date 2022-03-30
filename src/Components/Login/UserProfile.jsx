import React, { useRef, useState } from 'react'
import userService from '../../service/user-service';

export default function UserProfile(props) {
    const form = useRef();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [bloodGroup, setBloodGroup] = useState("");
    const [area, setArea] = useState("")
    const [locality, setLocality] = useState("");
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [pincode, setPincode] = useState("")
    const [alternateNumber, setAlternateNumber] = useState("")

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePhoneNumber = (e) => {
        const phoneNumber = e.target.value;
        setPhoneNumber(phoneNumber);
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangeGender = (e) => {
        const gender = e.target.value;
        setGender(gender);
    };
    const onChangeDateOfBirth = (e) => {
        const dateOfBirth = e.target.value;
        setDateOfBirth(dateOfBirth);
    };
    const onChangeBloodGroup = (e) => {
        const bloodGroup = e.target.value;
        setBloodGroup(bloodGroup);
    };
    const onChangeArea = (e) => {
        const area = e.target.value;
        setArea(area);
    };
    const onChangeLocality = (e) => {
        const locality = e.target.value;
        setLocality(locality);
    };
    const onChangeCity = (e) => {
        const city = e.target.value;
        setCity(city);
    };
    const onChangeState = (e) => {
        const state = e.target.value;
        setState(state);
    };
    const onChangeCountry = (e) => {
        const country = e.target.value;
        setCountry(country);
    };
    const onChangePincode = (e) => {
        const pincode = e.target.value;
        setPincode(pincode);
    };
    const onChangeAlternateNumber = (e) => {
        const alternateNumber = e.target.value;
        setAlternateNumber(alternateNumber);
    };

    const submitUserProfile = (e) => {
        e.preventDefault()

        const data = {
            username, name, phoneNumber, email, gender, dateOfBirth, bloodGroup, 'address':{
                area, locality, city, state, country, pincode
            }, alternateNumber
        }

        console.log(data)
        userService.setUserProfile(data).then((response) => {
            console.log(response)
            props.history.push("/");
            window.location.reload();
        })
        
    };
    return (
        <div>
            <form onSubmit={submitUserProfile} ref={form}>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' onChange={onChangeName} />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name='username' onChange={onChangeUsername} />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name='phoneNumber' onChange={onChangePhoneNumber} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name='email' onChange={onChangeEmail} />
                </div>
                <div>
                    <label>Gender</label>
                    <input type="text" name='gender' onChange={onChangeGender} />
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input type="text" name='dateOfBirth' onChange={onChangeDateOfBirth} />
                </div>
                <div>
                    <label>Blood group</label>
                    <input type="text" name='bloodGroup' onChange={onChangeBloodGroup} />
                </div>
                <h4>Address</h4>
                <div>
                    <label>House No/Stree Name</label>
                    <input type="text" name='stree' onChange={onChangeArea} />
                </div>
                <div>
                    <label>Locality</label>
                    <input type="text" name='locality' onChange={onChangeLocality} />
                </div>
                <div>
                    <label>City</label>
                    <input type="text" name='city' onChange={onChangeCity} />
                </div>
                <div>
                    <label>State</label>
                    <input type="text" name='state' onChange={onChangeState} />
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" name='country' onChange={onChangeCountry} />
                </div>
                <div>
                    <label>Pincode</label>
                    <input type="text" name='pincode' onChange={onChangePincode} />
                </div>
                <div>
                    <label>Alternate Phone Number</label>
                    <input type="text" name='state' onChange={onChangeAlternateNumber} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div>
    )
}