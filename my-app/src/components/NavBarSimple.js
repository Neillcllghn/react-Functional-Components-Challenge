import React from "react";
import css from "./css/NavBarSimple.module.css"




class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "My Gallery!",
            message: "Hello, guest!",
            buttonText: "log in",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState);
            console.log('Previous Props:', prevProps);
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
            };
        });
    }

    render() {
        return (
            <div className = {css.NavBar}>
                <h1>{this.state.title}</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        );
    }
}

export default NavBarSimple;