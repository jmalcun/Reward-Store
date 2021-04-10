import React from 'react'
import { HomeScreen } from '../components/HomeScreen';
import { Redeem } from '../components/Redeem'
import { MoreCoins } from '../components/MoreCoins'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Navbar } from '../components/Navbar';


export const AppRouter = () => {
    
    
    return (

        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/redeem" component={Redeem}/>
                    <Route exact path="/more-coins" component={MoreCoins}/> 
                    <Redirect to="/" />
                </Switch>  
            </Router>  
        </>
    )
}
