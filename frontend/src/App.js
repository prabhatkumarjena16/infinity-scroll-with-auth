import HomePage from "./screens/HomePage";
import LoginScreen from "./screens/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import withError from "./hooks/withError";

function App() {
  // Error handling
  const HomeScreen = withError(HomePage);
  const Login = withError(LoginScreen);

  return (
    <Router>
      <Header />
      <div className="main py-3">
        <Route exact path="/home" component={HomeScreen} />
        <Route exact exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
