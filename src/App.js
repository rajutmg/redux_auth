import { Route, Switch } from "react-router";
import "./App.css";
import Feature from "./components/auth/Feature";
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import Signup from "./components/auth/Signup";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/signout" component={Signout} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
