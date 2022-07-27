
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
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
     <Header/>
      <Switch>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/" element={<Home/>}/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
