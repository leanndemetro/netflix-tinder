import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SignupForm() {
  return (
    <div className="signupForm">
      <form action="/submit" method="post">
    <h1 className="formLabel">Sign Up</h1>
    <input type="text" className="form-control input" name="firstName" placeholder="First Name" autofocus></input>
    <input type="text" className="form-control input" name="lastName" placeholder="Last Name" autofocus></input>
    <input type="text" className="form-control input" name="email" placeholder="Email" autofocus></input>
    <input type="text" className="form-control input" name="password" placeholder="Password" autofocus></input>
    <button class="btn btn-lg btn-danger btn-block submitButton" id="submit" type="submit">Submit</button>
  </form>
    </div>

 
  );
}

export default SignupForm;