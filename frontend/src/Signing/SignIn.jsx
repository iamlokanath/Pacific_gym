import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API, Auth } from "aws-amplify";
import NavBar from "../presignup/Navbar";
// import GoogleButton from "../Components/Signing/GoogleButton";
// import FacebookButton from "../Components/Signing/FacebookButton";
import {useAppContext} from "../lib/contextLib"

import humanimg from "../img/humanimg.png";
import "./SignIn.css";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isValid, setIsValid] = useState(false);
  const {isAuthenticated,userHasAuthenticated} = useAppContext();
    const nav = useNavigate();



    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const data = await Auth.signIn(email, password);
            console.log(data);
            //   const userdata = await API.get("user", "/userdata");
            userHasAuthenticated(true);
              nav("/");
        } catch (e) {
            console.log(e);
        }
    };

    //   const ReturnNavigation = () => {
    //     Navigate("/");
    //   };

    return (
        <div className="">
        <NavBar/>
            <div className="signin-form">
                <img src={humanimg} alt=''></img>
                <h1> Sign-In Now</h1>
                <form
                    className=""
                    onSubmit={handleSubmit}
                >
                    <input
                        autoFocus
                        type="email"
                        className="input-box"
                        placeholder="Email Address"
                        autoComplete="current-password"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        type="password"
                        className="input-box"
                        placeholder="Password"
                        autoComplete="true"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button
                        className="login-btn"
                        disabled={!validateForm()}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                    <p className="">
                        {/* <Link to="/user/reset/password" className="text-Color4">
              {" "}
              Forgotten Your Password
            </Link> */}
                    </p>
                    <p>Do you don't have an account? Sign Up</p>

                </form>
            </div>
            {/* <button
        className="py-[0.15rem] px-1 rounded text-center font-semibold text-Color1 w-[5rem] bg-Color6 flex justify-center items-center absolute top-3 left-3"
        onClick={ReturnNavigation}
      >
        <img src={Return} alt="return" />
      </button> */}
        </div>
    );
};

export default Login;