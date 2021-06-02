import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Donations from './components/Donations/Donations/Donations';
import AddDonation from './components/Donations/AddDonation/AddDonation';
import DonationDetails from './components/Donations/DonationDetails/DonationDetails';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import SignUp from './components/Login/SignUp/SignUp';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/donations">
            <Donations></Donations>
          </Route>
          <Route path="/donation/:id">
            <DonationDetails></DonationDetails>
          </Route>
          <PrivateRoute path="/addDonation">
            <AddDonation></AddDonation>
          </PrivateRoute>
          <Route path="/register">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
