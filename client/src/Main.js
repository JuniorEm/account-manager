import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import App from "./App";
import User from "./User";
import Contact from "./Contact";
import './App.css';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/user">User Register</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={App} />
                        <Route path="/user" component={User} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
