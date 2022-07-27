
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { Fragment } from 'react';

function App() {
  return (
   <Router>
     <div className="app">
      <Switch>
      <Route path="/login" element={<Login/>}/>
      <Route exact path="/checkout" element={<><Header/><Checkout/></>}/>
      <Route exact path="/" element={<><Header/><Home/></>}/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
