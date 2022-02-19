
import './App.css';
import { BrowserRouter, Router, Route,Switch } from "react-router-dom";
import Header from './Components/HomePage/Header';
import ReactDOM from "react-dom";
  import { BrowserRouter, Router, Route,Switch } from "react-router-dom";
import Header from './Components/HomePage/SharedContent/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/HomePage/SharedContent/Footer';
import UserLogin from './Components/Login/UserLogin';
import OnlineConsultation from './Components/Online_Consultation/OnlineConsultation';
import Epharma from './Components/E_pharma/Epharma';
import UserRegistration from './Components/Register/UserRegistration';
import DocterRegistration from './Components/Register/DocterRegistration';
import RazorPay from './Components/Payment/RazorPay';



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
                    <Route path="/Epharma" component={Epharma}/>
                    <Route path="/Register" component={UserRegistration} exact/>
                    <Route path="/DocRegister" component={DocterRegistration}/>
                    
                    <Route path="/Payment" component={RazorPay}/>
                    
                </Switch>
        
        
          
      </BrowserRouter>
      

 
  );
}

export default App;
//yes

// {/* <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
//                           <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
//                           {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}


//                           // this is a comment