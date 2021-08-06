import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Genre from "./components/Genre";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Genre} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Genre} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/genre" component={Genre} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
