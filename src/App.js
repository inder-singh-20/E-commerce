
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
import { Fragment, useEffect } from 'react';
import { auth } from './firebase';
import {useStateValue} from './StateProvider'

function App() {

  const [{}, dispatch] = useStateValue();
  
  useEffect(()=>{
    //will only run once when the app component loads..
    auth.onAuthStateChanged(authUser =>{
      console.log('The USER is >>>>',authUser);

      if(authUser){
        // the user just logged in/ user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

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
