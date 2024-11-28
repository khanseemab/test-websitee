import React, { useState } from "react";
import Logo from "../../assets/logo2.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firbase";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {  Form, Input } from "antd";

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


    // const { username, password } = values;

    // if (username === "seemab" && password === "Seemab@2001") {
    //   alert("Successfully Logged In");
    //   navigate("/admin-dashboard");
    // } else if (username === "nabeel" && password === "Nabeel@1996") {
    //   alert("Successfully Logged In");
    //   navigate("/admin-dashboard");
    // } else if (
    //   username === "aman@k2ecommercesolution.com" &&
    //   password === "Aman.12@!"
    // ) {
    //   alert("Successfully Logged In");
    //   navigate("/emp-dashboard");
    // } else if (
    //   username === "anjali.k2es@gmail.com" &&
    //   password === "Anjali@!#"
    // ) {
    //   alert("Successfully Logged In");
    //   navigate("/emp-dashboard");
    // } else if (
    //   username === "himanshu.k2es@gmail.com" &&
    //   password === "Him@nshuNegi"
    // ) {
    //   alert("Successfully Logged In");
    //   navigate("/emp-dashboard");
    // } else if (
    //   username === "rajat@k2ecommercesolution.com" &&
    //   password === "R@jat#23!"
    // ) {
    //   alert("Successfully Logged In");
    //   navigate("/emp-dashboard");
    // } else if (
    //   username === "avi@k2ecommercesolution.com" &&
    //   password === "Avi@!123"
    // ) {
    //   alert("Successfully Logged In");
    //   navigate("/emp-dashboard");
    // } else if (
    //   username === "mahima@k2ecommercesolution.com" &&
    //   password === "M@hima!@3"
    // ) {
    //   alert("Successfully Logged In");
    //   navigate("/emp-dashboard");
    // } else if (
    //   username === "rachna.k2es@gmail.com" &&
    //   password === "R@chna!@2"
    // ) {
    //   alert("Successfully Logged In");
    //   navigate("/emp-dashboard");
    // } else if (
    //   username === "atul@k2ecommercesolution.com" &&
    //   password === "Atul@#123"
    // ) {
    //   alert("Successfully Logged In");
    //   navigate("/emp-dashboard");
    // } else if (
    //   username === "monal@k2ecommercesolution.com" &&
    //   password === "Mon@L!#21"
    // ) {
    //   alert("Successfully Logged In");
    //   navigate("/emp-dashboard");
    // } else if (
    //   username === "tarish@k2ecommercesolution.com" &&
    //   password === "Tarish@#Ali"
    // ) {
    //   alert("Successfully Logged In");
    //   navigate("/emp-dashboard");
    // } else {
    //   alert("You don't have permissions");
    // }
  };
  // const handleChange=(e)=>{
  //   setValue((prev)=>({...prev,name:e.target.value}))
  // }

  const signInUser = async (e) => {
    // e.preventDefault();
    const { username, password } = values;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      const user = userCredential.user;
      console.log(user, "user");

      // Determine user role based on email
      const role = determineUserRole(username);

      // Redirect based on user role
      if (role === "admin") {
        alert("Successfully Logged In");
        navigate("/admin-dashboard?email=");
      } else if (role === "employee") {
        alert("Successfully Logged In");
        navigate("/emp-dashboard");
      } else {
        alert("You don't have permissions");
      }
    } catch (error) {
      alert("Error signing in: " + error.message);
      console.error("Error signing in:", error);
    }
  };

  const determineUserRole = (email) => {
    if (email === "seemab2703@gmail.com" || email === "arbaz@gmail.com" ) {
      return "admin";
    } else {
      return "employee";
    }
  };

  localStorage.setItem("username", values.username);


  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="login_container">
        <div className="form_box d-flex">
          <div className="Screen1 p-0 m-0">
            <div className="register_main">
              <div>
                <h1 className="heading_welcome">WELCOME TO </h1>
              </div>

                <img className="image_logo" src={Logo} alt="404" />

              <div className="heading_name">
                <h1>TEST WEBSITE</h1>
              </div>
            </div>
          </div>

          <div className="login_screen p-0 m-0">
            <div className="screen__content">
              {/* <form className="login" onSubmit={signInUser}>
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
              </form> */}

              <Form
                className="login"
                onSubmit={signInUser}
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={signInUser}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  // label="Username"
                  // className="login__field"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your Email"
                    className="login__input"
                    value={values.username}
                    onChange={(e) => {
                      setValue((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }));
                    }}
                  />
                </Form.Item>

                <Form.Item
                  // className="login__field"
                  // label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter your Password"
                    className="login__input"
                    value={values.password}
                    onChange={(e) => {
                      setValue((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }));
                    }}
                  />
                </Form.Item>

                {/* <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <button type="submit" className="button login__submit">
                    <span className="button__text">Sign In</span>
                  </button>
                </Form.Item>
              </Form>

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
