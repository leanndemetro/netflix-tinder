import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SignupForm() {
  return (
    <div>
      <form action="/submit" method="post">
    <h2>Create A User</h2>
    <input type="text" class="form-control" name="firstName" placeholder="First Name" autofocus></input>
    <input type="text" class="form-control" name="lastName" placeholder="Last Name" autofocus></input>
    <input type="text" class="form-control" name="email" placeholder="Email" autofocus></input>
    <input type="text" class="form-control" name="password" placeholder="Password" autofocus></input>
    <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">Submit</button>
  </form>
    </div>

 
  );
}

export default SignupForm;