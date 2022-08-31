import React, { useContext, useState } from "react";
import { API, Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";
// import Return from "../utils/Svgs/Return.svg";
import {useAppContext} from "../lib/contextLib"

import  "./Signup.css";
import humanimg from "../img/humanimg.png";
import NavBar from "../presignup/Navbar"

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [newUser, setNewUser] = useState(null);
  const nav = useNavigate();
  const {isAuthenticated,userHasAuthenticated} = useAppContext();



  const validateForm = () => {
    return (
      //   firstName.length > 0 &&
      //   lastName.length > 0 &&
      //   phoneNumber.length > 0 &&
      //   email.length > 0 &&
      //   password.length > 0 &&
      //   password === confirmPassword
      true
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUserCheck = await Auth.signUp({
        username: email,
        password: password,
      });
      setNewUser(newUserCheck);
    } catch (e) {
      alert(e.message);
    }
  };

  const handleConfirmationSubmit = async (event) => {
    event.preventDefault();

    // UtilCtx.setLoader(true);

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      await API.post("UserApi", "/userdata", {
        body: {
          emailId: email,
          firstName: firstName,
          lastName: lastName,
        },
      });
      nav("/");
      //   const userdata = await API.get("user", "/userdata");
      //   UserDataCtx.setUserData(userdata);
      //   UserCtx.setIsLogged(true);
      //   UtilCtx.setLoader(false);
    } catch (e) {
      console.log(e);
      //   UtilCtx.setLoader(false);
    }
  };


  const renderForm = () => {
    return (
      <div>
        <NavBar/>
        <div className="sign-up-form">
          <img src={humanimg} alt=''></img>
          <h1>Sign Up Now</h1>
          <form
            className=""
            onSubmit={handleSubmit}
          >
            <input
              autoFocus
              type="text"
              className="input-box"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              autoFocus
              type="text"
              className="input-box"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <input
              type="number"
              className="input-box"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <input
              autoFocus
              type="email"
              className="input-box"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="input-box"
              autoComplete="true"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              className="input-box"
              placeholder="Confirm Password"
              value={confirmPassword}
              autoComplete="true"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <button
              className="signup-btn"
              disabled={!validateForm()}
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <p>Do you have an account? Sign In</p>

          </form>
        </div>
      </div>
    );
  };

  const renderConfirmationForm = () => {
    return (
      <div>
        <div className="">
          <form
            className=""
            onSubmit={handleConfirmationSubmit}
          >
            <ul>
              <li className="">
                <label
                  htmlFor="email"
                  className=""
                >
                  Confirmation Code
                </label>
                <input
                  type="tel"
                  className=""
                  placeholder="Confirm Password"
                  value={confirmationCode}
                  onChange={(e) => {
                    setConfirmationCode(e.target.value);
                  }}
                />
              </li>
            </ul>
            <p className="">
              Please check your email for the code.
            </p>
            <button
              className=""
              onClick={handleConfirmationSubmit}
            >
              Confirm Code
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      {!newUser ? renderForm() : renderConfirmationForm()}
      {/* <button
        className="py-[0.15rem] px-1 rounded text-center font-semibold text-Color1 w-[5rem] bg-Color6 flex justify-center items-center absolute top-3 left-3"
        onClick={ReturnNavigation}
      >
        {/* <img src={Return} alt="return" /> */}
      {/* </button>  */}
    </div>
  );
};

export default SignUp;