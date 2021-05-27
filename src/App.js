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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/donations">
          <Donations></Donations>
        </Route>
        <Route path="/donation/:id">
          <DonationDetails></DonationDetails>
        </Route>
        <Route path="/addDonation">
          <AddDonation></AddDonation>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
