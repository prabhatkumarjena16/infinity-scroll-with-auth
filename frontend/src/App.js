import HomePage from "./screens/HomePage";
import LoginScreen from "./screens/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Header from "./components/Header";
import withError from "./hooks/withError";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // Error handling
  const HomeScreen = withError(HomePage);
  const Login = withError(LoginScreen);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      <Header />
      <div className="main py-3">
        <Route
          exact
          path="/"
          render={() =>
            userInfo ? <Redirect to="/home" /> : <Redirect to="/login" />
          }
        />
        <Route exact path="/home" component={HomeScreen} />
        <Route exact exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
