import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './styles/App.css';
import Header from './containers/Header';
import Home from './containers/Home';
import Listings from './containers/Listings'
import { MuiThemeProvider } from "@material-ui/core";
import { THEME } from "./styles/Theme";
import { PATH } from "./paths";

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}
export default App;
