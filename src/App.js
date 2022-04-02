import "./App.css";
import EnterNewPass from "./Components/ForgotPassword/EnterNewPass";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import SendOtp from "./Components/ForgotPassword/SendOtp";
import EnterOtp from "./Components/ForgotPassword/EnterOtp";
import Profile from "./Components/Header/Profile";
import Message from "./Components/Header/Message";
import Forms from "./Components/Header/Forms";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Homepage">
            <Header />
            <Homepage />
          </Route>
          <Route exact path="/Profile">
            <Header />
            <Profile />
          </Route>
          <Route exact path="/Survey">
            <Header />
            <Forms/>
          </Route>
          <Route exact path="/Message">
            <Header />
            <Message />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/SendOtp">
            <SendOtp />
          </Route>
          <Route exact path="/EnterOtp">
            <EnterOtp />
          </Route>
          <Route exact path="/EnterNewPass">
            <EnterNewPass />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
