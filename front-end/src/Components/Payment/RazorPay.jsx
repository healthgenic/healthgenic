import React, { Component } from 'react';
import {Container, Input, Button} from "reactstrap";
import { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import useRazorpay from 'react-razorpay';




const RazorPay=()=>  {


    const Razorpay = useRazorpay();
    const [amount, setAmount] = useState({});
   
    const handleAmount = (e) => {
        console.log(amount);
         postData(amount);
         
      
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
        const postData= async (amount)=> {

        const datafetch = await axios.post(` http://localhost:7773/create-order`,amount).then(
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
                          currency: "INR",
                          name: "Payment Mechanism",
                          description: "Pay",
                          image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fhospital-icon-vector-flat-design_5430448.html&psig=AOvVaw1HY_IYGRs7zyDU09F5XEen&ust=1644950209169000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICkvZjr__UCFQAAAAAdAAAAABAQ",
                          order_id:response.data.id,
                          handler:function(response){
                          console.log(response.razorpay_payment_id);
                          console.log(response.razorpay_order_id)
                          console.log(response.razorpay_signature)


                          //for the database

                          updatePaymentOnServer(response.razorpay_payment_id, response.razorpay_order_id,"paid")

                          swal("Conratulation !!", "success");

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
                  
                 <Container className="text-center"> 
                 <label><b>Amount</b></label>
                <Input type="number" placeholder="Enter Amount" name="amt" id="amount" required
                  onChange={
                    (e) => {
                        setAmount({ ...amount, amount: e.target.value });
                    }
                }/>
                   <br/>
                <Button onClick={handleAmount} type="submit" color="success" className="btn-block">Pay</Button>
                  </Container>
            </div>


        );

            }   

export default RazorPay;