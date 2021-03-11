import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Login from './template/login'
import Signin from './template/signin'
import Forgot from './template/forgot_password';




class navbar extends Component {
    render() {
      return (
        <HashRouter>
          <div class="container">
              <div class="login-text">
                <div class="responsive-login-name">
                </div>
                <div class="tab-bar">
                  <NavLink to="/"><button class="login_button" id="login_button">Sign In</button></NavLink>
                  <NavLink to="/signin"><button class="signin_button" id="signin_button">Sign Up</button></NavLink>
                </div>
                <Route  exact={true} path="/" component={Login}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/forgot-password" component={Forgot}/>
              </div>
           </div>
        </HashRouter>
      );
    }
  }
  export default navbar;
