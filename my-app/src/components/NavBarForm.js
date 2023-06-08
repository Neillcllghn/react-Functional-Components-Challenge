import React, { Component } from 'react'
import NavBarChild from './NavBarChild';
import css from "./css/NavBarForm.module.css"

class NavBarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Login",
            isLoggedIn: true,
        };
    }
    
    handleSignIn = () => {
        this.setState({
          isLoggedIn: true,
        });
        console.log(this);
      };
    
      handleSignOut = () => {
        this.setState({
          isLoggedIn: false,
        });
        console.log(this);
      };

    render() {
        return (
            <div className = {css.NavBar}>
               <NavBarChild 
               isLoggedIn={this.state.isLoggedIn}
               handleSignIn={this.handleSignIn}
               handleSignOut={this.handleSignOut}
               />
            </div>
        );
    }
}

export default NavBarForm;
