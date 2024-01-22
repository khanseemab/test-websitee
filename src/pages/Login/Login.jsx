import React, { useState } from "react";
import Logo from "../../assets/logo2.png";

import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValue] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    const { username, password } = values;

    if (
      (username === "seemab" ) &&
      password === "Seemab@2001"
    ) {
      alert("Successfully Logged In");
      navigate("/admin-dashboard");
    } else if (username === "nabeel" && password === "Nabeel@1996") {
      alert("Successfully Logged In");
      navigate("/admin-dashboard");
    }else if (username === "K2" && password === "K2@ecommerce") {
      alert("Successfully Logged In");
      navigate("/emp-dashboard");
    } else {
      alert("You don't have permissions");
    }
  };
  // const handleChange=(e)=>{
  //   setValue((prev)=>({...prev,name:e.target.value}))
  // }

  return (
    <>
      <div className="login_container">
        <div className="form_box d-flex">
          <div className="Screen1 p-0 m-0">
            <div className="register_main">
              <div>
                <h1 className="heading_welcome">WELCOME TO </h1>
              </div>
              <Link to={"/"}>
                <img className="image_logo" src={Logo} alt="404" />
              </Link>
              <div className="heading_name">
                <h1>K2 E-Commerce Solution</h1>
              </div>
            </div>
          </div>

          <div className="login_screen p-0 m-0">
            <div className="screen__content">
              <form className="login" onSubmit={submitLogin}>
                <div className="login__field">
                  <input
                    type="text"
                    className="login__input"
                    placeholder="User name / Email"
                    value={values.username}
                    onChange={(e) => {
                      setValue((prev) => ({ ...prev, username: e.target.value }));
                    }}
                    autoComplete="off"
                  />
                </div>
                <div className="login__field">
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    value={values.password}
                    onChange={(e) => {
                      setValue((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }));
                    }}
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className="button login__submit">
                  <span className="button__text">Sign In</span>
                </button>
              </form>
              {/* <div>
                <Link
                
                  to="https://docs.google.com/forms/d/e/1FAIpQLScBFBIH5YglsInxE1HpV1eCngwXKkZvAJyY7opxzrQLxgDN1w/viewform?usp=sf_link"
                >
                <span  className="social-login" >
                 [ Join Us ]</span>
                </Link>
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
  );
};
export default Login;
