import { useState } from "react";

export default function Form(){

   let [formData , setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
   });
    

    let handleInputChange = (event)=>{
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData( (currData)=>{
            currData[fieldName]= newValue;
            return{...currData};
        });
    };

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: "",
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            &nbsp;&nbsp;
            <input placeholder="enter full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
            <br></br><br></br>
             <label htmlFor="Username">Username</label>
            &nbsp;&nbsp;
            <input placeholder="enter Username" type="text" value={formData.Username} onChange={handleInputChange} id="Username" name="UserName"/>
            <br></br><br></br>
            <label htmlFor="password">Password</label>
            &nbsp;&nbsp;
            <input placeholder="enter password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>
            <br></br><br></br>
            
            <button>Submit</button>
        </form>
    );
}