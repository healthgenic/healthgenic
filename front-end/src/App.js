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
import BookNow from '../src/Components/findDr/BookNow'
import drNearMe from './Components/findDr/drNearMe'
import Help from './Components/Help/Help';
import AppointmentPay from './Components/Online_Consultation/AppointMent Booking/AppointmentPay'
import BookAppointment from './Components/Online_Consultation/AppointMent Booking/BookAppointment'
import VideoConsult from './Components/Video_Consult/VideoConsult'
import UserProfile from './Components/Login/UserProfile'
import AboutUs from './Components/HomePage/AboutUs';
import Profile from './Components/Profile/user-profile';

 function App() {
  return (
    <BrowserRouter basename='/home'>
      <div className="App">
        <Header />
        {/* <UserProfile /> */}
      </div>
      <Switch>*

          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={UserLogin} />

          <Route path="/consult" component={OnlineConsultation} />
        

          <Route path="/Epharma" /*component={Epharma}..*/ >
            {/* <Card2Component /> */}
            <Epharma showNavbar={true} /> 

          </Route>
          
          <Route path="/Register" component={Register} exact />
          <Route path="/DocRegister" component={DocterRegistration} />


          
          <Route path="/covidEssential" component={CovidSection} />
          <Route path="/Ayurveda" component={AyurvedaSection} />
          <Route path="/Medicines" component={MedicinesSection} />
          <Route path="/MedicalDevice" component={MedicalDeviceSection} />

          <Route path="/Payment" component={RazorPay} />
          <Route path="/userProfile" component={UserProfile} />
          <Route path="/profile" component={Profile} /> 

          <Route path="/consult" component={OnlineConsultation} />
          <Route path="/Video_Consult" component={VideoConsult} exact />
          <Route path="/Video_Consult/bookAppointment" component={BookAppointment} exact/>
          <Route path='/Video_Consult/bookAppointment/pay' component={AppointmentPay} exact/>

          {/*  <Route path='/Checkout' component={Checkout} /> */}

          <Route path='/Help' component={Help} />
          <Route path="/SearchDr" component={drNearMe} />
          <Route path="/bookNow" component={BookNow} />

          <Route path="/AboutUs" component={AboutUs}/>

      </Switch>
      <Footer />
    </BrowserRouter >
    
       

      // <BrowserRouter basename='/home'>
      //   <div className="App">
      //        <Header/>
             
      //   </div>
      //           <Switch> 
      //               <Route path="/" component={HomePage} exact/>          
      //               <Route path="/login" component={UserLogin}/>
      //               <Route path="/consult" component={OnlineConsultation}/>
                   
      //               <Route path="/Epharma" /* component={Epharma} */>

      //               <Epharma showNavbar={true} />  
      //              </Route>

      //               <Route path="/Register" component={Register} exact/>
      //               <Route path="/DocRegister" component={DocterRegistration}/>
      //               <Route path="/covidEssential" component={CovidSection}/>
      //               <Route path="/Ayurveda" component={AyurvedaSection}/>
      //               <Route path="/Medicines" component={MedicinesSection}/>
      //               <Route path="/MedicalDevice" component={MedicalDeviceSection}/>
                   
      //              {/*  <Route path="/profile" component={Profile} />  */}
      //               <Route path="/Payment" component={RazorPay}/>
      //               {/* <Route path="/userProfile" component={UserProfile} /> */}
      //               <Route path="/SearchDr" component={drNearMe} />
      //             <Route path="/bookNow" component={BookNow} />
                   
      //           </Switch>
        
      //       <Footer/>
          
      // </BrowserRouter>
      

 
  );
}

export default App;