import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SigninForm() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
      e.preventDefault();
      try{
          const loginUser = {email, password};
          const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
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
    <div className="signinForm">
   <h1 className="formLabel">Sign In</h1>
   {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <form onSubmit={submit}>
    <input type="text" className="form-control input" name="email" placeholder="Email" autoFocus onChange={e => setEmail(e.target.value)}></input>
    <input type="text" className="form-control input" name="password" placeholder="Password" autoFocus onChange={e => setPassword(e.target.value)}></input>
    <button className="btn btn-lg btn-danger btn-block submitButton" id="submit" type="submit">Submit</button>
  </form>
    </div>


  );
}

export default SigninForm;