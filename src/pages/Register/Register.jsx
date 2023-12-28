import React, { useState } from "react";
// import "./Register.css";/
import Logo from '../../assets/logo.png';

const Register=()=>{
    const[values,setValue]=useState({
		name:"",
		email:"",
		password:""
	})
	const submitRegister=(e)=>{
      e.preventDefault()
	  const{value,name}=e.target
	  alert("Submit")
	  setValue((preValue)=>{
        return{
            ...preValue,
            [name]:value}}
	  )

	}
    return(
    <>
        <div>             
            <div className="register_container">
            <div className="Screen1" >
			  <div className="register_main">
			    <div><h1 className="heading_welcome">WELCOME TO </h1></div>
			        <img className='image_logo' src={Logo} alt="404"/>
		      	<div className="heading_name"><h1>K2 E-Commerce Solution</h1></div>
		       	</div>
			</div>
                	<div className="Screen">
					
                		<div className="Screen__content">
						
                			<form className="Register" onSubmit={submitRegister}>
                				<div className="Register__field">
                					<input type="text" className="Register__input" placeholder="Enter your Name"
									value={values.name}
									onChange={(e)=>{setValue(e.target.value)}}

									/>
                				</div>
                                <div className="Register__field">
                					<input type="text" className="Register__input" placeholder="Enter your Email"
									value={values.email}
									onChange={(e)=>{setValue(e.target.value)}}
									/>
                				</div>
                				<div className="Register__field">
                					<input type="password" className="Register__input" placeholder="Create Password"
									value={values.password}
									onChange={(e)=>{setValue(e.target.value)}}
									/>
                				</div>
                				<button className="button Register__submit">
                					<span className="Register__text">Register Now</span>
                				</button>				
                			</form>
							<a className="SignIn" href="/">LOGIN</a>
                			{/* <div className="social-login">
                				<h3>K2 e-commerce</h3>
								
                			</div> */}
                		</div>
                		<div className="screen__background">	
                			<span className="screen__background__shape screen__background__shape3"></span>		
                			<span className="screen__background__shape screen__background__shape2"></span>
                			<span className="screen__background__shape screen__background__shape1"></span>
                		</div>		
                	</div>
                </div>

      
			</div>
        </>
    )
}
export default Register;