import "./App.css";
import { Route, Switch } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Errors from "./Pages/Errors/Errors";
import LandPage from "./Pages/Landpage/Landpage";
import SignIn from "./Pages/signin/Signin";
import SignUp from "./Pages/signup/Signup";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./router/PrivateRoute";
import { currentUser } from "./JS/actions/user";
import News from "./Pages/News/News";
import Market from "./Pages/Market/Market";
import Coin from "./Pages/Market/Coin";
import Profile from "./Pages/profile/Profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentUser());
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/news" component={News} />
        <PrivateRoute path="/market/coin/:id" component={Coin} />
        <Route path="/market" component={Market} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/*" component={Errors} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
