import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        <h1>My Gallery!</h1>
        {props.isLoggedIn ? (
            <div>
                <form>
                    Username: <input type='text' />
                </form>
                <button onClick={props.handleSignOut}>Submit</button>
            </div>
        ) : (
            <button onClick={props.handleSignIn}>Login</button>
            )}
    </div>
  );
}

export default NavBarChild