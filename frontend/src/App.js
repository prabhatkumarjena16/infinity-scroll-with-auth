import HomePage from "./screens/HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="py-3">
        <Route path="/home" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
