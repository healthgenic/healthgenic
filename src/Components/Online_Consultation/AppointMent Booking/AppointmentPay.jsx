import React from 'react';
import {Container, Input, Button} from "reactstrap";
import { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import useRazorpay from 'react-razorpay';

const AppointmentPay=()=>  {

    const Razorpay = useRazorpay();
//  const amt = localStorage.getItem('price')
    const [amount, setAmount] = useState({});
    const [name, setName] = useState({}); 
    const [address, setAddress] = useState({}); 
    const [pincode, setPincode] = useState({}); 
    const [mobile, setMobile] = useState({}); 
   
    const handleAmount = (e) => {
        console.log(amount);
        console.log(name);
        const data = {'amount': amount.amount, 'name':name.name, 'address':address.address,'pincode':pincode.pincode,'mobile':mobile.mobile}
        console.log(data);
         postData(data);
   };

    //updating the data on server
    const updatePaymentOnServer= async (payment_id,order_id,status)=> {
    
        const params = new URLSearchParams()
        params.append('payment_id',payment_id)
        params.append('order_id', order_id)
        params.append('status', status)
       

        axios({
            method: 'post',
            url: `http://localhost:8080/update-order`,
           /*  headers: {},  */
            data: {
              'payment_id': payment_id, 
              'order_id': order_id,
              'status': status// This is the body part
            }
          });
        }
    
    
    //post data on server
        const postData= async (data)=> {
          
        const datafetch = await axios.post(`http://localhost:8080/create-order`,data).then(
            (response)=>{
                console.log(response);
                console.log("success with post data through AXIOS");
                
              if(response.status=="200" || 200)
                  {
                   
                    console.log("Response is : "+response);
                      //open payment form
                      var options={
                          key: "rzp_test_ADUmf8lV5Avque",
                          amount: response.data.amount,
                          name: response.data.name,
                          address:response.data.address,
                          pincode:response.data.pincode,
                          mobile:response.data.mobile,
                          currency: "INR",
                          name: "Payment Mechanism",
                          description: "Pay",
                          image:"https://www.digitaloutlook.com.au/wp-content/uploads/2017/09/future_payment_methods-compressor-1.jpg",
                          order_id:response.data.id,
                          handler:function(response){
                          console.log(response.razorpay_payment_id);
                          console.log(response.razorpay_order_id)
                          console.log(response.razorpay_signature)

                          //for the database

                          updatePaymentOnServer(response.razorpay_payment_id, response.razorpay_order_id,"paid")

                          swal("Congratulations !!","Your Appointment is Booked Succesfully !! ", "success");

                          },
                          "prefill": {
                            "name": "",
                            "email": "",
                            "contact": ""
                            },
                            "notes": {
                            "address": "Enter details carefully!!"
                            },
                            "theme": {
                            "color": "#3399cc"
                            },
                           };
                         //var rzp = new RazorPay(options);
                         var rzp = new window.Razorpay(options);

                         rzp.on('payment.failed', function (response)
                         {
                            console.log(response.error.code);
                            console.log(response.error.description);
                            console.log(response.error.source);
                            console.log(response.error.step);
                            console.log(response.error.reason);
                            console.log(response.error.metadata.order_id);
                            console.log(response.error.metadata.payment_id);
                             alert("fail...")
                        
                        });
                           
                         
                         rzp.open();

                  }         
           
            },
            (error)=>{
                console.log(error);
                console.log("error in axios", error);

            }
        );
        }    
 
    
  
        return (

        <div className='container col-4 border mt-5 mb-5'>
            <h1 className='text-center'>Confirm and Pay</h1>
            <form>    
                    <div className='form-group mt-4'>
                        <label><b>Patient Name</b></label>
                        <Input type='text' placeholder="Enter Your Name"  name='name' id='name'
                        onChange={
                        (e) => {
                            setName({ ...name, name: e.target.value });
                        }}  />
                    </div>

                <br></br>
                <div className='form-group'>
                    <select class="form-select"  onChange={(e) => {setAmount({ ...amount, amount: e.target.value });}}>
                        <option selected>Choose Mode of Consultation</option>
                        <option value='200'>Video Consultation - ₹200</option>
                        <option value='100'>Audio Consultation - ₹100</option>
                    </select>
                </div> 

                <br/>
                

            </form> 
            <Button onClick={handleAmount} type="submit" color="success" className="btn-block btn-lg text-light">Pay</Button>
        </div>


        );

            }   

export default AppointmentPay;