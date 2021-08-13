import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Discover from "./pages/Discover";
import Signup from "./pages/Signup";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }; 

  render() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/signup" component={Signup} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
  }
}

export default App;
