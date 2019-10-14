import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props=> {

  const credentials ={ username: "Lambda School", password: "i<3Lambda4"};
  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };
  
  
  
  return (
    <div className ="login">
      <h1>Welcome to the Bubble App!</h1>
      <p>This is a super sucure website, please enter your account information below, if you dare</p>
    <Form onSubmit={handleSubmit}>
    <label htmlFor="username">Username:</label>
        <input type="text" name="username" placeholder="Lambda School" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder="i<3Lambd4" />
        <button type="submit">Login</button>
    </Form>
    </div>
    
  );
};

export default Login;
