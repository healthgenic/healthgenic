import React from 'react';
import {Container, Input, Button} from "reactstrap";
import { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import useRazorpay from 'react-razorpay';

const RazorPay=()=>  {


    const Razorpay = useRazorpay();
    const amt = localStorage.getItem('price')
    const [amount, setAmount] = useState({'amount': amt});
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
            url: ` http://localhost:7773/update-order`,
            headers: {}, 
            data: {
              'payment_id': payment_id, 
              'order_id': order_id,
              'status': status// This is the body part
            }
          });
        }
    
    
    //post data on server
        const postData= async (data)=> {
           debugger;
        const datafetch = await axios.post(` http://localhost:7773/create-order`,data).then(
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

                          swal("Conratulation !!","Your Payment is Succussful", "success");

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
            <div>
                  
                 <Container> 

                 <label><b>Name</b></label>
                 <Input type='text' placeholder="Enter Your Name"  name='name' id='name'
                  onChange={
                  (e) => {
                      setName({ ...name, name: e.target.value });
                  }}  />

                 <label><b>Address</b></label>
                 <Input type='text' placeholder=" (Home No,Building,Street,Area,City,State)" name='address' id='address'
                  onChange={
                  (e) => {
                      setAddress({ ...address, address: e.target.value });
                  }}  />
                     
                     <label><b>Pincode</b></label>
                 <Input type='number' placeholder="Enter Your Pincode"  name='pincode' id='pincode'
                  onChange={
                  (e) => {
                      setPincode({ ...pincode, pincode: e.target.value });
                  }}  />

                 <label><b>Mobile No.</b></label>
                 <Input type='number' placeholder="Enter Your Mobile Number" name='mobile' id='mobile'
                  onChange={
                  (e) => {
                      setMobile({ ...mobile, mobile: e.target.value });
                  }}  />


                 <label><b>Amount</b></label>
                 <Input name="amt" id="amount" value={amount.amount} disabled
                   onChange={
                     (e) => {
                         setAmount({ ...amount, amount: e.target.value });
                     }
                 } 
                /> 
                   <br/>
                <Button onClick={handleAmount} type="submit" color="success" className="btn-block">Pay</Button>
                  </Container>
            </div>


        );

            }   

export default RazorPay;