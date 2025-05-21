import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const form=[step1,step2,step3];
  const[step,setStep]=useState(0)
  // const [name, setName] = useState("");
  // const [formData, setFormData] = useState({
  //   step1: {
  //     firstName: "",
  //     lastName: "",
  //   },
  //   step2: {
  //     brand: "",
  //     model: "",
  //   },
  //   step3: {
  //     cardNumber: "",
  //     expirationDate: "",
  //   },
  // });



 const CurrentRenderer = form[step];
  return (
    <div className="main">
     <CurrentRenderer setStep={setStep}/>
    
     
    </div>
  )
};

  const step1=({setStep })=>{
    return(
    <div className="card">
      <h1>Coustomer Dtaild</h1>
    <label>First name:</label>
    <input id="first_name"></input>
    <label>Last name:</label>
    <input id="last_name"></input>
    <button className="but" onClick={()=>setStep((pre)=>pre=+1 )}>Next</button>
    </div>
    );
  };
  const step2=({setStep})=>{
    return(
  <div className="card">
      <h1>Card Details</h1>
      <label>Brand:</label>
    <input id="model"></input>
    <label>model</label>
    <input id="card_info"></input>
    <div className="btn1">
    <button className="but" onClick={()=>setStep((pre)=>pre-1)}>privios</button>
    <button className="but" onClick={()=>setStep((pre)=>pre+1)}>Next</button>
    </div>
    </div>
    );
  };
  const step3=({setStep})=>{
    return(
  <div className="card">
      <h1>Pyment Details</h1>
      <label>Credit Card Number:</label>
    <input id="card_info"></input>
    <label>Expairation Date:</label>
    <input id="expiry_date"></input>
    <div className="btn1">
    <button className="but" onClick={()=>setStep((pre)=>pre-1)}>privios</button>
    <button className="but" onClick={()=>alert("tttttt")}>submit</button>
    </div>
    </div>
    );

  };
export default App;
