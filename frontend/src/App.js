import { useEffect } from "react";
import HomePage from "./screens/HomePage/HomePage";
import LoginScreen from "./screens/Login/LoginScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";

function App({ history }) {
  return (
    <Router>
      <Header />
      <div className="main py-3">
        <Route path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
