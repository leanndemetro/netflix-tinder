import "./style.css";
import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SignupForm() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
      e.preventDefault();

      try{
          const newUser = {email, password, firstName, lastName};
          await axios.post("http://localhost:5000/users/register", newUser);
          const loginResponse = await axios.post("http://localhost:5000/users/login", {
              email, password
          });
          setUserData({
              token: loginResponse.data.token,
              user: loginResponse.data.user
          });
          localStorage.setItem("auth-token", loginResponse.data.token);
          history.push("/");
      } catch(err) {
          err.response.data.msg && setError(err.response.data.msg)
      }
      
  };
  
  return (
    <div className="signupForm">
    <h1 className="formLabel">Sign Up</h1>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <form onSubmit={submit}>
    <input type="text" className="form-control input" name="firstName" placeholder="First Name" autoFocus onChange={e => setFirstName(e.target.value)}></input>
    <input type="text" className="form-control input" name="lastName" placeholder="Last Name" autoFocus onChange={e => setLastName(e.target.value)}></input>
    <input type="text" className="form-control input" name="email" placeholder="Email" autoFocus onChange={e => setEmail(e.target.value)}></input>
    <input type="text" className="form-control input" name="password" placeholder="Password" autoFocus onChange={e => setPassword(e.target.value)}></input>
    <button className="btn btn-lg btn-danger btn-block submitButton" id="submit" type="submit">Submit</button>
  </form>
    </div>

 
  );
}

export default SignupForm;