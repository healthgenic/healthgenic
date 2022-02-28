
import './App.css';
import { BrowserRouter, Router, Route,Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from './Components/HomePage/SharedContent/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/HomePage/SharedContent/Footer';
import UserLogin from './Components/Login/UserLogin';
import OnlineConsultation from './Components/Online_Consultation/OnlineConsultation';
import Epharma from './Components/E_pharma/Epharma';
/* import UserRegistration from './Components/Register/UserRegistration'; */
import DocterRegistration from './Components/Register/DocterRegistration';
import RazorPay from './Components/Payment/RazorPay';
import CovidSection from './Components/E_pharma/Covid_Essentials/CovidSection';
import AyurvedaSection from './Components/E_pharma/Ayurveda_Products/AyurvedaSection'
import MedicalDeviceSection from './Components/E_pharma/Medical_Devices/MedicalDeviceSection'
import MedicinesSection from './Components/E_pharma/Medicines/MedicinesSection'
/* import UserProfile from './Components/Login/UserProfile'; */
import Register from './Components/Login/register';
/* import Profile from '../src/Components/Profile/user-profile'; */
import Checkout from './Components/Online_Consultation/AppointMent Booking/Checkout';
import BookAppointment from './Components/Online_Consultation/AppointMent Booking/BookAppointment';
<<<<<<< HEAD
import UserRegistration from './Components/Register/UserRegistration';
import Card2Component from './Components/HomePage/Cards2/Card2Component';
=======
>>>>>>> f2bdc75388a203887b9f3f618682cb2567629e9a


function App() {

  
  return (
    
       

      <BrowserRouter basename='/home'>
        <div className="App">
             <Header/>
             
        </div>
                <Switch> 
                    <Route path="/" component={HomePage} exact/>          
                    <Route path="/login" component={UserLogin}/>
                    <Route path="/consult" component={OnlineConsultation}/>
                   
                    <Route path="/Epharma" /* component={Epharma} */>
                    <Card2Component/>
                   </Route>

                      
                    <Route path="/Register" component={UserRegistration} exact/>
                    <Route path="/DocRegister" component={DocterRegistration}/>

                    <Route path="/covidEssential" component={CovidSection}/>
                    <Route path="/Ayurveda" component={AyurvedaSection}/>
                    <Route path="/Medicines" component={MedicinesSection}/>
                    <Route path="/MedicalDevice" component={MedicalDeviceSection}/>

                    <Route path="/Payment" component={RazorPay}/>
<<<<<<< HEAD

                    <Route path="/bookAppointment" component={BookAppointment}/>

                    <Route path='/Checkout' component={Checkout}/>
=======
                    {/* <Route path="/userProfile" component={UserProfile} /> */}

                    <Route path="/bookAppointment" component={BookAppointment}/>

                    <Route path='/Checkout' component={Checkout}/>  

>>>>>>> f2bdc75388a203887b9f3f618682cb2567629e9a
                </Switch>
        
            <Footer/>
          
      </BrowserRouter>
      

 
  );
}

export default App;
