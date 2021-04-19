import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Listings from './components/Listings'
import { MuiThemeProvider } from "@material-ui/core";
import { THEME } from "./styles/Theme";
import { PATH } from "./paths";

function App() {
    return (
       <MuiThemeProvider theme={ THEME }>
           <div className="App">
               <Header/>
               <Router>
                   <Switch>
                       <Route exact path={PATH.home} render={()=> <Home/>} />
                       <Route path={PATH.listing} render={()=> <Listings/>} />
                   </Switch>
               </Router>
           </div>
       </MuiThemeProvider>
    );
}
export default App;
