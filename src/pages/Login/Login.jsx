import React,{ useState} from "react";

import "./Login.css";
import { Link, useNavigate } from "react-router-dom";


const Login=()=>{
	const[values,setValue]=useState({

		email:"",
		password:""
	})
	const navigate= useNavigate();
	
	const submitLogin=(e)=>{
      e.preventDefault()
	  const{value,name}=e.target
	  
	  setValue((preValue)=>{
        return{
            ...preValue,
            [name]:value}}
	  )
	const {email,password}=values;

if((email==="nabeel" || email==="seemab" || email==="dawood") && password==="admin"){
	alert("Successfully Logged In")
    navigate('/Dashboard');	
}else{
	alert("You don't have permissions")
}
	  
	
}
	// const handleChange=(e)=>{
    //   setValue((prev)=>({...prev,name:e.target.value}))
	// }

    return(
        <>
       
         <div className="login_container">
	        
	            <div className="login_screen">
	            	<div className="screen__content">
	            		<form className="login" onSubmit={submitLogin}>
	            			<div className="login__field">
	            				
	            				<input type="text" className="login__input" 
								placeholder="User name / Email"
								value={values.email}
								onChange={(e)=>{setValue((prev)=>({...prev,email:e.target.value}))}}
								autoComplete="off"
								/>
	            			</div>
	            			<div className="login__field">
	            			
	            				<input type="password" className="login__input" 
								placeholder="Password"
								value={values.password}
								onChange={(e)=>{setValue((prev)=>({...prev,password:e.target.value}))}}
								autoComplete="off"

								/>
	            			</div>
	            			<button type="submit" className="button login__submit">
	            				<span className="button__text">Sign In</span>
	            	
	            			</button>	
										
	            		</form>
						{/* <a className="register" href="/Register">Register</a> */}
	            		<div >
	            			<Link className="social-login" to={'/'}><h3>K2 e-commerce</h3></Link>
	            			
	            		</div>
						
	            	</div>
	            	<div className="screen__background">
	            		<span className="screen__background__shape screen__background__shape3"></span>		
	            		<span className="screen__background__shape screen__background__shape2"></span>
	            		<span className="screen__background__shape screen__background__shape1"></span>
	            	</div>		
	            </div>
    
			</div>
        </>
    )
}
export default Login;