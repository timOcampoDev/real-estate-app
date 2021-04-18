import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import { MuiThemeProvider } from "@material-ui/core";
import { THEME } from "./styles/Theme";

function App() {
    return (
       <MuiThemeProvider theme={THEME}>
           <div className="App">
               <Header/>
               <Router>
                   <Switch>
                       <Route path={'/'} render={()=> <Home/>} />
                   </Switch>
               </Router>
           </div>
       </MuiThemeProvider>
    );
}
export default App;
